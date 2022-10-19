import ILens from '../../interfaces/Lens';

const lensMock:ILens = {
  degree: 180,
  antiGlare: true,
  blueLightFilter: true,
};

const lensMockWithId:ILens & { _id:string } = {
  _id: '62cf1fc6498565d94eba52ca',
  degree: 180,
  antiGlare: true,
  blueLightFilter: true,
};

export { lensMock, lensMockWithId };