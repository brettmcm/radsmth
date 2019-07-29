<?php

return [
    'mySpacesVolumeHandle' => [
        'hasUrls' => true,
        'url' => 'https://radsmth.sfo2.digitaloceanspaces.com',
        'keyId' => getenv('SPACES_API_KEY'),
        'secret' => getenv('SPACES_SECRET'),
        'endpoint' => getenv('SPACES_ENDPOINT'),
        'region' => getenv('SPACES_REGION'),
        'bucket' => getenv('SPACES_BUCKET'),
    ],
];
