import React from 'react';
import type { IconType } from 'react-icons';

interface IconWrapperProps {
    Icon: IconType;
}

const IconWrapper: React.FC<IconWrapperProps> = ({ Icon }) => {
    const IconComponent = Icon as React.ComponentType;
    return <IconComponent />;
};

export default IconWrapper;
