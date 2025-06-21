"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Flex, SmartImage, IconButton } from ".";
import styles from "./CompareImage.module.scss";

interface SideContent {
  src: string | React.ReactNode;
  alt?: string;
}

interface CompareImageProps extends React.ComponentProps<typeof Flex> {
  leftContent: SideContent;
  rightContent: SideContent;
}

const renderContent = (content: SideContent, clipPath: string) => {
  if (typeof content.src === "string") {
    return (
      <SmartImage
        src={content.src}
        alt={content.alt || ""}
        fill
        position="absolute"
        style={{ clipPath }}
      />
    );
  }

  return (
    <Flex fill position="absolute" style={{ clipPath }}>
      {content.src}
    </Flex>
  );
};

export const CompareImage = ({ leftContent, rightContent, ...rest }: CompareImageProps) => {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMouseDown = useCallback(() => { // Memoize handleMouseDown
    isDragging.current = true;
  }, []); // No dependencies as it only mutates a ref

  const handleMouseUp = useCallback(() => { // Memoize handleMouseUp
    isDragging.current = false;
  }, []); // No dependencies as it only mutates a ref

  const updatePosition = useCallback((clientX: number) => {
    if (!isDragging.current || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const containerWidth = rect.width;

    const newPosition = Math.max(0, Math.min(100, (x / containerWidth) * 100));
    setPosition(newPosition);
    // setPosition is stable, and containerRef.current access doesn't require it in deps.
  }, []); // setPosition is stable by React guarantee.

  const handleMouseMove = useCallback((e: MouseEvent) => {
    updatePosition(e.clientX);
  }, [updatePosition]);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (e.touches.length > 0) { // Ensure there's at least one touch point
      updatePosition(e.touches[0].clientX);
    }
  }, [updatePosition]);

  useEffect(() => {
    // Add event listeners using the memoized handlers
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleMouseUp);

    // Cleanup function
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp, handleTouchMove]); // Add memoized handlers to dependency array

  return (
    <Flex
      ref={containerRef}
      aspectRatio="16/9"
      fillWidth
      style={{ touchAction: "none" }}
      {...rest}
    >
      {renderContent(leftContent, `inset(0 ${100 - position}% 0 0)`)}
      {renderContent(rightContent, `inset(0 0 0 ${position}%)`)}

      {/* Hit area and visible line */}
      <Flex
        position="absolute"
        horizontal="center"
        width={3}
        className={styles.hitArea}
        top="0"
        bottom="0"
        style={{
          left: `${position}%`,
        }}
        onMouseDown={handleMouseDown} // Use memoized version
        onTouchStart={handleMouseDown} // Use memoized version
      >
        <Flex width="1" fillHeight background="neutral-strong" zIndex={2} />
      </Flex>
      <IconButton
        icon="chevronsLeftRight"
        variant="secondary"
        className={styles.dragIcon}
        style={{
          left: `${position}%`,
        }}
        onMouseDown={handleMouseDown} // Use memoized version
        onTouchStart={handleMouseDown} // Use memoized version
      />
    </Flex>
  );
};

CompareImage.displayName = "CompareImage";
