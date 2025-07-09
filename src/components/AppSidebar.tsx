
import React from 'react';
import { 
  Home, 
  Users, 
  BookOpen, 
  Calendar, 
  MessageSquare, 
  Search, 
  CreditCard, 
  User, 
  BarChart3, 
  DollarSign,
  Settings,
  LogOut
} from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from '@/components/ui/sidebar';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';

interface AppSidebarProps {
  userType: 'student' | 'teacher' | 'admin';
}

export function AppSidebar({ userType }: AppSidebarProps) {
  const navigate = useNavigate();

  const getMenuItems = () => {
    const baseItems = [
      { title: 'Dashboard', icon: Home, url: `/${userType}-dashboard`, active: true },
      { title: 'Classes', icon: Calendar, url: '/classes' },
      { title: 'Assignments', icon: BookOpen, url: '/assignments' },
      { title: 'Messages', icon: MessageSquare, url: '/messages' },
    ];

    if (userType === 'student') {
      return [
        ...baseItems,
        { title: 'Find Tutors', icon: Search, url: '/find-tutors' },
        { title: 'Payments', icon: CreditCard, url: '/payments' },
        { title: 'Profile', icon: User, url: '/profile' },
      ];
    } else if (userType === 'teacher') {
      return [
        ...baseItems,
        { title: 'Students', icon: Users, url: '/students' },
        { title: 'Analytics', icon: BarChart3, url: '/analytics' },
        { title: 'Earnings', icon: DollarSign, url: '/revenue' },
        { title: 'Profile', icon: User, url: '/profile' },
      ];
    } else {
      return [
        ...baseItems,
        { title: 'User Management', icon: Users, url: '/users' },
        { title: 'Analytics', icon: BarChart3, url: '/analytics' },
        { title: 'Revenue', icon: DollarSign, url: '/revenue' },
        { title: 'Settings', icon: Settings, url: '/settings' },
      ];
    }
  };

  const getUserDisplayName = () => {
    if (userType === 'student') return 'Alex Student';
    if (userType === 'teacher') return 'Dr. Sarah Johnson';
    return 'Admin User';
  };

  const getUserRole = () => {
    if (userType === 'student') return 'Student';
    if (userType === 'teacher') return 'Teacher';
    return 'Administrator';
  };

  const menuItems = getMenuItems();

  return (
    <Sidebar>
      <SidebarHeader>
        <div 
          className="flex items-center space-x-2 p-4 cursor-pointer hover:bg-gray-50 rounded-lg transition-colors"
          onClick={() => navigate('/')}
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-xl">
            <BookOpen className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            TutorHub
          </span>
        </div>
        
        <div className="p-4 border-t">
          <div className="flex items-center space-x-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400" />
              <AvatarFallback>
                {getUserDisplayName().split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-900 truncate">
                {getUserDisplayName()}
              </p>
              <p className="text-xs text-gray-500">{getUserRole()}</p>
            </div>
            <Badge variant="secondary" className="text-xs">
              Online
            </Badge>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    isActive={item.active}
                    onClick={() => navigate(item.url)}
                  >
                    <div className="flex items-center space-x-2 cursor-pointer">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <div className="flex items-center space-x-2 cursor-pointer">
                <Settings className="h-4 w-4" />
                <span>Settings</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild onClick={() => navigate('/')}>
              <div className="flex items-center space-x-2 cursor-pointer text-red-600">
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
