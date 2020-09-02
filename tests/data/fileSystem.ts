import * as FileSystem from 'expo-file-system';


test('Get File System', async (): Promise<void> => {
  const capacity = FileSystem.getTotalDiskCapacityAsync();
  expect(capacity).toBe(5);
});
