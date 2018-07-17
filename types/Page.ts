interface Page {
    id: string;
    title: string;
    order: number;
    visible: boolean;
    settings: PageSettings;
    children: Node[];
}

interface PageSettings {
    background: Color;
    grid: [number, number]
}