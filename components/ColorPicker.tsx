'use client';
import React, { useState } from 'react';
import Viewer360 from './Viewer360';
import { VF_3_INFO_LIST } from '../data/vf3-info';
import Image from 'next/image';

type Props = {};

const ColorPicker = (props: Props) => {
  const [selectedColorId, setSelectedColorId] = useState(VF_3_INFO_LIST[0].id as string);

  const onChangeColorId = (id: string): void => {
    setSelectedColorId(id);
  };

  return (
    <>
      <Viewer360 colorId={selectedColorId} />
      <div className="color-name">
        <h3> {VF_3_INFO_LIST.find((info) => info.id === selectedColorId)?.name}</h3>
      </div>
      <div className="color-picker">
        {VF_3_INFO_LIST.map((info) => (
          <div key={info.id} className={`color-icon ${selectedColorId === info.id ? 'active' : ''}`} onClick={() => onChangeColorId(info.id)}>
            <Image src={info.iconPath} width={64} height={64} alt={`color-picker-${info.id}`} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ColorPicker;
