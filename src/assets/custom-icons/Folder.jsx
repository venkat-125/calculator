import React from 'react';

export const Folder = ({ color }) => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.3332 15.8333C18.3332 16.2754 18.1576 16.6993 17.845 17.0118C17.5325 17.3244 17.1085 17.5 16.6665 17.5H3.33317C2.89114 17.5 2.46722 17.3244 2.15466 17.0118C1.8421 16.6993 1.6665 16.2754 1.6665 15.8333V4.16667C1.6665 3.72464 1.8421 3.30072 2.15466 2.98816C2.46722 2.67559 2.89114 2.5 3.33317 2.5H7.49984L9.1665 5H16.6665C17.1085 5 17.5325 5.17559 17.845 5.48816C18.1576 5.80072 18.3332 6.22464 18.3332 6.66667V15.8333Z" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

Folder.defaultProps = {
  color: 'black',
};
