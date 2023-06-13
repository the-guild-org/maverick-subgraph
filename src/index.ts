import { createBuiltMeshHTTPHandler } from '../.graphclient';

self.addEventListener('fetch', createBuiltMeshHTTPHandler());
