"use client";

import { useMotionValue, useMotionTemplate, MotionValue } from "framer-motion";
import { useState, useCallback } from "react";

const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function generateRandomString(length: number) {
    let result = "";
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

export type EvervaultHook = {
    mouseX: MotionValue<number>;
    mouseY: MotionValue<number>;
    randomString: string;
    maskImage: MotionValue<string>;
    onMouseMove: (e: React.MouseEvent<HTMLElement>) => void;
};

/**
 * A reusable hook that powers the Evervault card effect – random character
 * overlay revealed through a radial gradient mask that follows the cursor.
 */
export function useEvervault(): EvervaultHook {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const [randomString, setRandomString] = useState(() =>
        generateRandomString(1200)
    );

    const maskImage = useMotionTemplate`radial-gradient(220px at ${mouseX}px ${mouseY}px, white, transparent)`;

    const onMouseMove = useCallback(
        (e: React.MouseEvent<HTMLElement>) => {
            const { left, top } = e.currentTarget.getBoundingClientRect();
            mouseX.set(e.clientX - left);
            mouseY.set(e.clientY - top);
            setRandomString(generateRandomString(1200));
        },
        [mouseX, mouseY]
    );

    return { mouseX, mouseY, randomString, maskImage, onMouseMove };
}
