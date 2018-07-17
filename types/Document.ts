interface Document {
    id: string;
    name: string;
    visible: boolean;
    children: Page[];
    created: number;
    settings: DocumentSettings;
}

interface DocumentSettings {
    snapToObjects: boolean;
}