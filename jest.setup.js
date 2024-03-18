import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

const localStorageMock = {
	getItem: jest.fn(),
	setItem: jest.fn(),
	clear: jest.fn(),
};
Object.defineProperty(global, 'localStorage', {
	value: localStorageMock,
});

const BroadcastChannelMock = class BroadcastChannel {};
global.BroadcastChannel = BroadcastChannelMock;
