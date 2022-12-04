import { z } from 'zod';

const lensZodSchema = z.object({
  degree: z.number(),
  antiGlare: z.boolean(),
  blueLightFilter: z.boolean(),
});

type ILens = z.infer<typeof lensZodSchema>;

export default ILens;
export { lensZodSchema };

// interface ILens {
//   degree: number,
//   antiGlare: boolean,
//   blueLightFilter: boolean,
// }

// export default ILens;