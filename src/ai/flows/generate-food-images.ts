'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating high-quality food images of chicken tenders.
 *
 * The flow takes a description of the desired image as input and uses a generative AI model
 * to create an image that matches the description.
 *
 * @interface GenerateFoodImagesInput - Defines the input schema for the generateFoodImages function.
 * @interface GenerateFoodImagesOutput - Defines the output schema for the generateFoodImages function.
 * @function generateFoodImages - The main function that triggers the image generation flow.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateFoodImagesInputSchema = z.object({
  description: z
    .string()
    .describe(
      'A detailed description of the desired food image, including the food item, style, and any specific details.'
    ),
});

export type GenerateFoodImagesInput = z.infer<typeof GenerateFoodImagesInputSchema>;

const GenerateFoodImagesOutputSchema = z.object({
  imageUrl: z
    .string()
    .describe(
      'The URL (data URI) of the generated food image in base64 format.'
    ),
});

export type GenerateFoodImagesOutput = z.infer<typeof GenerateFoodImagesOutputSchema>;

export async function generateFoodImages(
  input: GenerateFoodImagesInput
): Promise<GenerateFoodImagesOutput> {
  return generateFoodImagesFlow(input);
}

const generateFoodImagesPrompt = ai.definePrompt({
  name: 'generateFoodImagesPrompt',
  input: {schema: GenerateFoodImagesInputSchema},
  output: {schema: GenerateFoodImagesOutputSchema},
  prompt: `You are an AI that generates high-quality, visually appealing images of food, specifically chicken tenders, based on the provided description.

  Description: {{{description}}}

  Please generate an image that matches the description and adheres to a premium food photography aesthetic, including glossy highlights, warm lighting, and appetizing textures. Return the image as a data URI.
  `,
});

const generateFoodImagesFlow = ai.defineFlow(
  {
    name: 'generateFoodImagesFlow',
    inputSchema: GenerateFoodImagesInputSchema,
    outputSchema: GenerateFoodImagesOutputSchema,
  },
  async input => {
    const {media} = await ai.generate({
      model: 'googleai/imagen-4.0-fast-generate-001',
      prompt: input.description,
    });

    if (!media || !media.url) {
      throw new Error('Failed to generate image.');
    }

    return {imageUrl: media.url};
  }
);
