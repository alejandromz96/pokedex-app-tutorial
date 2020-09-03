import { useState, useEffect } from "react";
import axios from 'axios';
import * as FileSystem from 'expo-file-system';
import { DownloadStatus, PokemonListAPIResult, PokemonDataAPI, PokemonData } from "../model";
import settings from '../settings';

const usePokemonDownloader = (): DownloadStatus => {
    const [downloadStatus, setDownloadStatus] = useState<DownloadStatus>({
        downloaded: 0,
        total: 0,
        percent: 0,
    });

    const downloadAllPokemonInfo = async (): Promise<void> => {
        const allPokemons = (await axios.get<PokemonListAPIResult>(`${settings.apiURL}/pokemon?limit=${settings.maxPokemons}`)).data;

        const basePath = `${FileSystem.documentDirectory || ''}images`;
        try {
            await FileSystem.deleteAsync(basePath);
        } catch (ex) {
            // eslint-disable-next-line no-console
            console.log(ex);
        }
        await FileSystem.makeDirectoryAsync(basePath);

        const pokemonInfo = new Array<PokemonData>();

        setDownloadStatus(current => ({ ...current, total: allPokemons.count }));

        allPokemons.results.forEach(async (currentPokemon): Promise<void> => {
            const pokemonData = (await axios.get<PokemonDataAPI>(currentPokemon.url)).data;
            setDownloadStatus(current => ({
                ...current,
                downloaded: (current.downloaded + 1),
                percent: Math.floor((current.downloaded + 1) / current.total * 100)
            }));

            const imageURL = pokemonData.sprites.front_default;
            if (imageURL) {
                const downloadImage = FileSystem.createDownloadResumable(
                    imageURL,
                    `${basePath}/${pokemonData.id}.png`,
                );
                const imageDownloadResult = await downloadImage.downloadAsync();

                const stats = pokemonData.stats.reduce<{ [name: string]: number }>((accStat, currentStat) => ({
                    ...accStat,
                    [currentStat.stat.name]: currentStat.base_stat,
                }), {});

                if (imageDownloadResult) {
                    const imageLocalURI = imageDownloadResult.uri;
                    pokemonInfo.push({
                        id: pokemonData.id,
                        name: pokemonData.name,
                        height: pokemonData.height,
                        weight: pokemonData.weight,
                        imageURL,
                        imageLocalURI,
                        types: pokemonData.types.map((typeNode) => typeNode.type.name),
                        stats,
                    });
                }
            };
        });
    };

    useEffect(() => {
        downloadAllPokemonInfo().then(
            (): void => {
                setDownloadStatus((current) => ({ ...current, percent: 100 }));
            },
            (error) => {
                // eslint-disable-next-line no-console
                console.error(error);
            },
        )
    }, []);

    return downloadStatus;
}

export default usePokemonDownloader;