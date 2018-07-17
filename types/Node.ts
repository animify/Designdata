interface Node {
    id: string;
    backgroundColor: Color;
    bounds: Bounds;
    preserveRatio: boolean;
    opacity: number;
    locked: boolean;
    visible: boolean;
    type: NodeType;
    children?: Node[];
    fontType: FontType;
}

enum NodeType {
    'Shape' = 'shape'
}