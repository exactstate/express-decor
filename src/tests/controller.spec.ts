import { expect } from 'chai';
import { exampleController } from './setup';

describe('@controller', () => {
    it('should apply path to controller if supplied', () => {
        expect(exampleController.path).equals('/example');
    })
})