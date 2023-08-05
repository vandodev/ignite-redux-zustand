import { describe, expect, it } from "vitest";
import { useStore } from '.';

describe('zustand store', () => {
    it('should be able to play', () => {
        const {play} = useStore.getState();
        play([1,2]);
        const {currentModuleIndex, currentLessonIndex} = useStore.getState();
        expect(currentModuleIndex).toEqual(1);
        expect(currentLessonIndex).toEqual(2)
    })
})