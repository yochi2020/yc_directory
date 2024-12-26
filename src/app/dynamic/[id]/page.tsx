'use client'
// app/dynamic/[id]/page.tsx

import { useParams } from 'next/navigation';  // ใช้ useParams สำหรับดึงข้อมูล dynamic parameter
import React, { useEffect, useState } from 'react';

const Dynamic = () => {
  const { id } = useParams();  // ดึงค่า `id` จาก URL
  const [data, setData] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/data/${id}`);  // ดึงข้อมูลจาก API หรือเซิร์ฟเวอร์
      const result = await res.json();
      setData(result.data);
    };
    
    if (id) {
      fetchData();
    }
  }, [id]);

  return (
    <div>
      Dynamic {id} - {data}
    </div>
  );
}

export default Dynamic;
