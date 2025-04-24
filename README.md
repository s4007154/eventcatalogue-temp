# eventcatalogue-temp

## Issue One - WriteServiceToEvent not Creating Files

For the first issue, there seems to be some sort of pathing error when attempting to `WriteServiceToEvent` in a nested structure. 

I have had this issue both on MACOS and Windows.

To replicate this issue, simplify uncomment the following lines in the [eventCatalogueCreation](eventCatalogueCreation.mjs) file.

```
// await writeEventToService({
//     id: 'InventoryAdjusted',
//     name: 'Inventory Adjusted',
//     version: '0.0.1',
//     summary: 'This is a summary',
//     markdown: '# Hello world',
//     }, { id: 'InventoryService' });

// await writeEventToService({
//     id: 'InventoryCleared',
//     name: 'Inventory Cleared',
//     version: '0.0.1',
//     summary: 'This is a summary',
//     markdown: '# Hello world',
//     }, { id: 'InventoryService' });
```

Then run the following command:

``` bash
node eventCatalogueCreation.mjs
```

## Issue One - addEventToService deleting "events" Folder

This issue seems to be related to the following following github issue: https://github.com/event-catalog/sdk/issues/118 

Basically, when there is more than one Event in an events folder. It will destroy eveything in it. I have also seen a variation of the issue (based on the order you preform the write and add functions) where only one event is left behind.

To replicate this issue, preform the following:

1. Re-comment the following lines in the [eventCatalogueCreation](eventCatalogueCreation.mjs) file.

```
// await writeEventToService({
//     id: 'InventoryAdjusted',
//     name: 'Inventory Adjusted',
//     version: '0.0.1',
//     summary: 'This is a summary',
//     markdown: '# Hello world',
//     }, { id: 'InventoryService' });

// await writeEventToService({
//     id: 'InventoryCleared',
//     name: 'Inventory Cleared',
//     version: '0.0.1',
//     summary: 'This is a summary',
//     markdown: '# Hello world',
//     }, { id: 'InventoryService' });
```

2. Run the following command to produce the Domains and Services only:

``` bash
node eventCatalogueCreation.mjs
```

3. Create two different event folders with index.mdx files

4. Uncomment the following lines in the [eventCatalogueCreation](eventCatalogueCreation.mjs) file.

```
// await addEventToService('InventoryService', 'receives', { id: 'InventoryAdjusted', version: '0.0.1' });
// await addEventToService('InventoryService', 'receives', { id: 'InventoryCleared', version: '0.0.1' });

```
5. Re-run the following command


``` bash
node eventCatalogueCreation.mjs
```