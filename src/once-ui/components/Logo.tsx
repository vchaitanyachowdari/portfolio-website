"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image"; // Import next/image
import classNames from "classnames";
import styles from "./Logo.module.scss";
import { SpacingToken } from "../types";
import { Flex } from ".";

const sizeMap: Record<string, SpacingToken> = {
  xs: "20",
  s: "24",
  m: "32",
  l: "40",
  xl: "48",
};

interface LogoProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string;
  size?: "xs" | "s" | "m" | "l" | "xl";
  style?: React.CSSProperties;
  wordmark?: boolean;
  icon?: boolean;
  iconSrc?: string;
  wordmarkSrc?: string;
  href?: string;
}

const Logo: React.FC<LogoProps> = ({
  size = "m",
  wordmark = true,
  icon = true,
  href,
  iconSrc,
  wordmarkSrc,
  className,
  style,
  ...props
}) => {
  useEffect(() => {
    if (!icon && !wordmark) {
      console.warn(
        "Both 'icon' and 'wordmark' props are set to false. The logo will not render any content.",
      );
    }
  }, [icon, wordmark]);

  const content = (
    <>
      {icon && !iconSrc && (
        <div
          style={{
            height: `var(--static-space-${sizeMap[size]})`,
          }}
          className={styles.icon}
        />
      )}
      {iconSrc && (
        <Image
          height={parseInt(sizeMap[size], 10)}
          width={parseInt(sizeMap[size], 10)} // Assuming square aspect ratio for the container; SVG will scale.
          alt="Trademark Icon" // More specific alt text
          src={iconSrc}
          // style prop removed to rely on width/height props for next/image handling
        />
      )}
      {wordmark && !wordmarkSrc && (
        <div
          style={{
            height: `var(--static-space-${sizeMap[size]})`,
          }}
          className={styles.type}
        />
      )}
      {wordmarkSrc && (
        <Image
          height={parseInt(sizeMap[size], 10)}
          width={parseInt(sizeMap[size], 10) * 3} // Assuming wordmark is wider, e.g., 3:1 aspect ratio for container.
                                                  // This width is for layout reservation. Actual rendering controlled by style.
          alt="Trademark Wordmark" // More specific alt text
          src={wordmarkSrc}
          // style prop removed to rely on width/height props for next/image handling
        />
      )}
    </>
  );

  return href ? (
    <Link
      className={classNames("radius-l", "display-flex", "fit-height", className)}
      style={style}
      href={href}
      aria-label="Trademark"
      {...props}
    >
      {content}
    </Link>
  ) : (
    <Flex
      className={classNames(className)}
      radius="l"
      fitHeight
      style={style}
      aria-label="Trademark"
    >
      {content}
    </Flex>
  );
};

Logo.displayName = "Logo";
export { Logo };
