import React from "react";
import "./OnePagerLayout.css";

interface OnePagerLayoutProps {
  railTag: string;
  focusLabel: string;
  focusValue: string;
  railIntro: React.ReactNode;
  children: React.ReactNode;
}

const OnePagerLayout: React.FC<OnePagerLayoutProps> = ({
  railTag,
  focusLabel,
  focusValue,
  railIntro,
  children,
}) => {
  return (
    <div className="onepager-stage">
      <div className="onepager-page">
        <aside className="onepager-rail">
          <div className="onepager-glow"></div>
          <div className="onepager-lockup">
            <svg
              className="onepager-mark"
              width="40"
              height="40"
              viewBox="0 0 120 120"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0"
                y="0"
                width="120"
                height="120"
                rx="20"
                fill="white"
              />
              <g fill="#3754DC">
                <rect x="16" y="16" width="24" height="24" rx="4" />
                <rect
                  x="48"
                  y="16"
                  width="24"
                  height="24"
                  rx="4"
                  transform="rotate(-15 60 28)"
                />
                <rect
                  x="80"
                  y="16"
                  width="24"
                  height="24"
                  rx="4"
                  transform="translate(2 -3) rotate(21 92 28)"
                />
                <rect x="16" y="48" width="24" height="24" rx="4" />
                <rect x="48" y="48" width="24" height="24" rx="4" />
                <rect
                  x="80"
                  y="48"
                  width="24"
                  height="24"
                  rx="4"
                  transform="rotate(12 92 60)"
                />
                <rect x="16" y="80" width="24" height="24" rx="4" />
                <rect x="48" y="80" width="24" height="24" rx="4" />
                <rect x="80" y="80" width="24" height="24" rx="4" />
              </g>
            </svg>
            <div className="onepager-name">
              ELAINE ADAMSON
              <br />
              CONSULTING
            </div>
          </div>
          <div className="onepager-tag">{railTag}</div>
          <div className="onepager-focus">
            <div className="onepager-focus-label">{focusLabel}</div>
            <div className="onepager-focus-value">{focusValue}</div>
          </div>
          <p className="onepager-intro">{railIntro}</p>
          <div className="onepager-contact">
            <div className="onepager-contact-name">Elaine Adamson</div>
            <div className="onepager-contact-ln">
              <a href="https://elaineadamson.com">elaineadamson.com</a>
              <br />
              California, across US time zones
            </div>
            <a className="onepager-cta" href="https://cal.com/elaine-adamson">
              Book a call →
            </a>
          </div>
        </aside>

        <main className="onepager-main">{children}</main>
      </div>
    </div>
  );
};

export default OnePagerLayout;
