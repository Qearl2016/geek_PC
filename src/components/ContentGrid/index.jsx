import React from 'react';
import ContentCard from '../ContentCard';
import './index.css';

const mockData = [
  {
    id: 1,
    imageUrl: "https://images.unsplash.com/photo-1516559828984-fb3b99548b21?auto=format&fit=crop&w=800",
    title: "今日打卡清迈小众咖啡店✨",
    description: "这家藏在巷子里的咖啡店也太可爱了吧！墙上的复古装饰和温馨的灯光让人感觉特别温暖～",
    likes: 2341,
    comments: 125,
    gradient: "linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)",
    author: {
      name: "咖啡探店",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100"
    }
  },
  {
    id: 2,
    imageUrl: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=800",
    title: "超简单的居家料理分享",
    description: "今天教大家做一道超级简单又美味的料理，只需要15分钟就能完成哦～",
    likes: 1892,
    comments: 89,
    gradient: "linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)",
    author: {
      name: "美食达人",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100"
    }
  },
  {
    id: 3,
    imageUrl: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800",
    title: "周末一个人的小确幸",
    description: "独自旅行也很美好，发现了很多平时不会注意到的风景～",
    likes: 3267,
    comments: 156,
    gradient: "linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)",
    author: {
      name: "旅行记录",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100"
    }
  },
  {
    id: 4,
    imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800",
    title: "今年最值得入手的运动鞋",
    description: "分享一下最近入手的几双运动鞋，都是百搭款式，穿着特别舒服！",
    likes: 2156,
    comments: 98,
    gradient: "linear-gradient(to right, #fa709a 0%, #fee140 100%)",
    author: {
      name: "潮流穿搭",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100"
    }
  }
];

const ContentGrid = () => {
  return (
    <div className="content-grid">
      {mockData.map(item => (
        <ContentCard key={item.id} data={item} />
      ))}
    </div>
  );
};

export default ContentGrid;
