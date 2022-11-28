import React from 'react';
import ReactDOM from 'react-dom/client';
import ReIcon from '../reIcon';
import './style/index.scss';

interface LoadingFnProps {
  text: string;
}

const LoadingCom = React.forwardRef<HTMLDivElement, LoadingFnProps>(function LoadingComponent(
  props: LoadingFnProps,
  ref,
) {
  return (
    <div className="loading-fn" ref={ref}>
      <div className="loading-fn__box ignore">
        <ReIcon name="ri-loader-4-line" size="32px" color="#fff" />
        <span>{props.text}</span>
      </div>
    </div>
  );
});

class Loading {
  private dom: HTMLElement | null = null;
  private vDOM: ReactDOM.Root | null = null;
  private loadingRef = React.createRef<HTMLDivElement>();

  start(text?: string) {
    if (this.dom) return;
    // 背景层固定不滚动
    document.body.style.overflow = 'hidden';
    const txt = text ? text : 'loading...';
    const node = document.createElement('div');
    document.body.appendChild(node);
    this.dom = node;
    this.vDOM = ReactDOM.createRoot(this.dom);
    this.vDOM.render(<LoadingCom text={txt} ref={this.loadingRef} />);
  }

  stop() {
    this.loadingRef.current?.classList.add('out');
    this.loadingRef.current?.addEventListener('transitionend', () => {
      this.vDOM?.unmount();
      if (document.body.contains(this.dom) && this.dom) {
        document.body.removeChild(this.dom);
        this.dom = null;
      }
      document.body.removeAttribute('style');
    });
  }
}

export default Loading;
