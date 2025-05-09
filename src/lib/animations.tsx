'use client';
import { motion, AnimatePresence } from "framer-motion";

interface AnimateProps {
    children?: React.ReactNode;
    className?: string;
};

// Slide In
export const SlideInTop: React.FC<AnimateProps> = ({children, className}) => {
  return(
    <AnimatePresence>
      <motion.div
        initial={{ y: -100}}
        animate={{ y: 0}}
        transition={{ duration: 0.4 }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
export const SlideInBottom: React.FC<AnimateProps> = ({children, className}) => {
  return(
    <AnimatePresence>
      <motion.div
        initial={{ y: 100}}
        animate={{ y: 0}}
        transition={{ duration: 0.4 }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
export const SlideInLeft: React.FC<AnimateProps> = ({children, className}) => {
  return(
    <AnimatePresence>
      <motion.div
        initial={{ x: -100}}
        animate={{ x: 0}}
        transition={{ duration: 0.4 }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
export const SlideInRight: React.FC<AnimateProps> = ({children, className}) => {
  return(
    <AnimatePresence>
      <motion.div
        initial={{ x: 100}}
        animate={{ x: 0}}
        transition={{ duration: 0.4 }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

// Slide Out
export const SlideOutTop: React.FC<AnimateProps> = ({children, className}) => {
  return(
    <AnimatePresence>
      <motion.div
        initial={{ y: 0}}
        exit={{ y: -100}}
        transition={{ duration: 0.4 }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
export const SlideOutBottom: React.FC<AnimateProps> = ({children, className}) => {
  return(
    <AnimatePresence>
      <motion.div
        initial={{ y: 0}}
        exit={{ y: 100}}
        transition={{ duration: 0.4 }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
export const SlideOutRight: React.FC<AnimateProps> = ({children, className}) => {
  return(
    <AnimatePresence>
      <motion.div
        initial={{ x: 0}}
        exit={{ x: 100}}
        transition={{ duration: 0.4 }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
export const SlideOutLeft: React.FC<AnimateProps> = ({children, className}) => {
  return(
    <AnimatePresence>
      <motion.div
        initial={{ x: 0}}
        exit={{ x: -100}}
        transition={{ duration: 0.4 }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

// Fade
export const FadeIn: React.FC<AnimateProps> = ({ children, className }) => {
    return(
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className={className}
          >
            {children}
          </motion.div>
        </AnimatePresence>
    );
};
export const FadeOut: React.FC<AnimateProps> = ({ children, className }) => {
  return(
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className={className}
        >
          {children}
        </motion.div>
      </AnimatePresence>
  );
};