# eventcatalogue-temp

Make sure to npm install once in the root folder to install the EventCatalogSDK and once in the temp-catalog folder to install EventCatalog

## Issue One - WriteEventToService not Creating Files

For the first issue, there seems to be some sort of pathing error when attempting to `WriteEventToService` in a nested structure. 

I have had this issue both on MACOS and Windows. 

The difference between MACOS and Windows, is the on Windows it seems to completely error, and on MACOS it would create a massive file structure inside the root directory of event-catalogue instead of writing to Service.

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

## Issue Two - addEventToService deleting "events" Folder

This issue seems to be related to the following github issue: https://github.com/event-catalog/sdk/issues/118 

Basically, when there is more than one unique "event" folder in a root <events> folder. It will destroy eveything in it. I have also seen a variation of the issue where only one event is left behind but the rest are destroyed.

To replicate this issue, preform the following:

1. Re-comment or delete the following lines in the [eventCatalogueCreation](eventCatalogueCreation.mjs) file as these are no longer needed.

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
