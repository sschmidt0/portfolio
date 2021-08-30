import {
  TransitionGroup,
  Transition as ReactTransition,
} from 'react-transition-group';

const TIMEOUT = 500;

const getTransitionStyles = {
  entering: {
    position: 'fixed',
    right: '-300px',
  },
  entered: {
    transition: `right ${TIMEOUT}ms ease`,
    right: 0
  },
  exiting: {
    transition: `right ${TIMEOUT}ms ease`,
    right: '-300px'
  },
};

const Transition = ({ children }) => (
  <TransitionGroup style={{ position: "relative" }}>
    <ReactTransition
      // key={ location }
      timeout={{
        enter: TIMEOUT,
        exit: TIMEOUT,
      }}
    >
      {(status) => (
        <div
          style={{
            ...getTransitionStyles[status],
          }}
        >
          {children}
        </div>
      )}
    </ReactTransition>
  </TransitionGroup>
);

export default Transition;
