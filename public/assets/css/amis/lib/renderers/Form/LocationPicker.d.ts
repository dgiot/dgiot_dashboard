import React from 'react';
import { ThemeProps } from '../../theme';
import { FormBaseControl, FormControlProps } from './Item';
/**
 * Location 选点组件
 * 文档：https://baidu.gitee.io/amis/docs/components/form/location
 */
export interface LocationControlSchema extends FormBaseControl {
    type: 'location-picker';
    /**
     * 选择地图类型
     */
    vendor?: 'baidu' | 'gaode' | 'tenxun';
    /**
     * 有的地图需要设置 ak 信息
     */
    ak?: string;
}
export interface LocationControlProps extends FormControlProps, Omit<ThemeProps, 'className'>, Omit<LocationControlSchema, 'type' | 'className' | 'descriptionClassName' | 'inputClassName'> {
    value: any;
    onChange: (value: any) => void;
    vendor: 'baidu' | 'gaode' | 'tenxun';
    ak: string;
    coordinatesType: 'bd09' | 'gcj02';
}
export declare class LocationControl extends React.Component<LocationControlProps> {
    static defaultProps: {
        vendor: string;
        coordinatesType: string;
    };
    render(): JSX.Element;
}
export declare class LocationRenderer extends LocationControl {
}
