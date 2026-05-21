export interface JointPoint {
  x: number;
  y: number;
}

export interface SkeletonRig {
  head: JointPoint;
  neck: JointPoint;
  leftShoulder: JointPoint;
  rightShoulder: JointPoint;
  leftElbow: JointPoint;
  rightElbow: JointPoint;
  leftWrist: JointPoint;
  rightWrist: JointPoint;
  spine: JointPoint;
  leftHip: JointPoint;
  rightHip: JointPoint;
  leftKnee: JointPoint;
  rightKnee: JointPoint;
  leftAnkle: JointPoint;
  rightAnkle: JointPoint;
}

export interface FormDeviationConfig {
  lowLabel: string;
  highLabel: string;
  lowFeedback: string;
  highFeedback: string;
  perfectFeedback: string;
}

export interface Exercise {
  id: string;
  name: string;
  category: string;
  jointTarget: string;
  idealAngleRange: string;
  activeSensors: string[];
  instructions: string[];
  deviations: FormDeviationConfig;
  getDefaultRig: (completion: number, deviation: number) => SkeletonRig;
}

export interface SensorHotspot {
  id: string;
  title: string;
  subtitle: string;
  x: number; // percentage in SVG coordinate
  y: number;
  metrics: string[];
  description: string;
  techSpec: string;
  signalFreq: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  rating: number;
  comment: string;
  avatarUrl: string;
}

export interface OrderPackage {
  mirrorSize: '43' | '55';
  shirtsCount: number;
  shirtSize: 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL';
  selectedColor: 'Obsidian' | 'Chroma-Steel' | 'Siren-Red';
  withBioFibers: boolean;
}
