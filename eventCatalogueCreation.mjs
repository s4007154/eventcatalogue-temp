import utils from '@eventcatalog/sdk';

const { writeDomain, writeServiceToDomain, writeEventToService, addServiceToDomain, addEventToService } = utils('temp-catalog');


await writeDomain({
    id: 'Payment',
    name: 'Payment domain',
    version: '0.0.1',
    summary: 'Domain for all things to do with payments',
    markdown: '# Hello world',
},
    {override: true});


await writeServiceToDomain({
    id: 'InventoryService',
    name: 'Inventory Service',
    version: '0.0.1',
    summary: 'Service that handles the inventory',
    markdown: '# Hello world',
}, 
    { id: 'Payment' },
    {override: true});

await addServiceToDomain('Payment', { id: 'InventoryService', version: '0.0.1' });

// Issue 1: Uncomment the following lines to replicate the issue

await writeEventToService({
    id: 'InventoryAdjusted',
    name: 'Inventory Adjusted',
    version: '0.0.1',
    summary: 'This is a summary',
    markdown: '# Hello world',
    }, { id: 'InventoryService' });

await writeEventToService({
    id: 'InventoryCleared',
    name: 'Inventory Cleared',
    version: '0.0.1',
    summary: 'This is a summary',
    markdown: '# Hello world',
    }, { id: 'InventoryService' });

// Issue 2: Uncomment the following lines to replicate the issue

// await addEventToService('InventoryService', 'receives', { id: 'InventoryAdjusted', version: '0.0.1' });
// await addEventToService('InventoryService', 'receives', { id: 'InventoryCleared', version: '0.0.1' });
