import { useState } from 'react';

export function Testing() {
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = (event) => {
    const longSideElement = event.target;
    const shortSideElement = event.currentTarget;
    const isLongSideFinishedScrolling =
      longSideElement.scrollHeight <= longSideElement.scrollTop + longSideElement.clientHeight;

    if (isLongSideFinishedScrolling) {
      setIsScrolling(false);
      return;
    }

    const isShortSideScrolling = shortSideElement.scrollTop > 0;
    setIsScrolling(isShortSideScrolling);
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ flex: 1, overflow: 'auto' }} onScroll={handleScroll}>
        Short side content
      </div>
      <div style={{ flex: 3, overflow: 'auto' }} onScroll={handleScroll}>
        Long side content
        <div>bbbbb</div>
        <div>bbbbb</div>
        <div>bbbbb</div>
        <div>bbbbb</div>
        <div>bbbbb</div>
        <div>bbbbb</div>
        <div>bbbbb</div>
        <div>bbbbb</div>
        <div>bbbbb</div>
        <div>bbbbb</div>
        <div>bbbbb</div>
        <div>bbbbb</div>
        <div>bbbbb</div>
        <div>bbbbb</div>
        <div>bbbbb</div>
        <div>bbbbb</div>
        <div>bbbbb</div>
        <div>bbbbb</div>
        <div>bbbbb</div>
        <div>bbbbb</div>
        <div>bbbbb</div>
        <div>bbbbb</div>
        <div>bbbbb</div>
        <div>bbbbb</div>
        <div>bbbbb</div>
        <div>bbbbb</div>
        <div>bbbbb</div>
        <div>bbbbb</div>
        <div>bbbbb</div>
        <div>bbbbb</div>
        <div>bbbbb</div>
        <div>bbbbb</div>
        <div>bbbbb</div>
        <div>bbbbb</div>
        <div>bbbbb</div>
        <div>bbbbb</div>
        <div>bbbbb</div>
        <div>bbbbb</div>
        <div>bbbbb</div>
        <div>bbbbb</div>
        <div>bbbbb</div>
        <div>bbbbb</div>
        <div>bbbbb</div>
        <div>bbbbb</div>
        <div>bbbbb</div>
        <div>bbbbb</div>
        <div>bbbbb</div>
        <div>bbbbb</div>
        <div>bbbbb</div>
        {isScrolling && (
          <div style={{ position: 'absolute', top: 0, right: 0 }}>
            Waiting for short side to finish scrolling...
          </div>
        )}
      </div>
    </div>
  );
}
