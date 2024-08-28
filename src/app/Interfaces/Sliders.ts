// src/app/models/slider.interface.ts
export interface Tool {
    id: string;
    image: string;
  }
  
  export interface Slider {
    id: number;
    backgroundImage: string;
    title: string;
    subtitle: string;
    buttonText: string;
    buttonLink: string;
    tools: Tool[];
  }
  