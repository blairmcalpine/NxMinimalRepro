export const createConfig = (args: { packageName: string }) => ({
  displayName: args.packageName,
  moduleFileExtensions: ['tsx', 'ts', 'jsx', 'js', 'json'],
  transform: {
    '^.+\\.[tj]sx?$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  preset: '../../jest.preset.js',
});

export default {
  projects: [
    '<rootDir>/libs/products/product-detail-page/jest.config.ts',
    '<rootDir>/libs/shared/product/state/jest.config.ts',
    '<rootDir>/libs/products/home-page/jest.config.ts',
    '<rootDir>/libs/shared/cart/state/jest.config.ts',
    '<rootDir>/libs/shared/product/ui/jest.config.ts',
    '<rootDir>/libs/cart/cart-page/jest.config.ts',
    '<rootDir>/libs/shared/header/jest.config.ts',
    '<rootDir>/apps/products/jest.config.ts',
    '<rootDir>/apps/cart/jest.config.ts',
  ],
};
