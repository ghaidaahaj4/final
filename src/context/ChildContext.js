import React, { createContext, useContext, useState, useEffect } from 'react';
import { firestore } from '../firebase/firebase';
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc, query, where } from 'firebase/firestore';

const ChildContext = createContext();

export const useChild = () => {
  return useContext(ChildContext);
};

export const ChildProvider = ({ children }) => {
  const [childrenData, setChildrenData] = useState(() => {
    const storedChildrenData = localStorage.getItem('children-data');
    return storedChildrenData ? JSON.parse(storedChildrenData) : [];
  });

  const [loading, setLoading] = useState(false);
  const [selectedChildId, setSelectedChildId] = useState(null);

  const getUserFromLocalStorage = () => {
    const userInfo = localStorage.getItem('user-info');
    return userInfo ? JSON.parse(userInfo) : null;
  };

  const saveChildrenDataToLocalStorage = (data) => {
    localStorage.setItem('children-data', JSON.stringify(data));
  };

  useEffect(() => {
    const fetchUserChildren = async () => {
      setLoading(true);
      try {
        const user = getUserFromLocalStorage();
        if (!user) return;

        const q = query(collection(firestore, 'children'), where('userId', '==', user.uid));
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        if (JSON.stringify(data) !== JSON.stringify(childrenData)) {
          setChildrenData(data);
          saveChildrenDataToLocalStorage(data);
        }
      } catch (error) {
        console.error("Error fetching user children:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserChildren();
  }, []);

  const addChild = async (child) => {
    const user = getUserFromLocalStorage();
    console.log('user', user);
    if (!user) return;


    const childWithUserId = { ...child, userId: user.uid };
    console.log('childtoAdd', childWithUserId);
    const docRef = await addDoc(collection(firestore, 'children'), childWithUserId);
    const newChildData = { id: docRef.id, ...childWithUserId };
    const newChildrenData = [...childrenData, { id: docRef.id, ...childWithUserId }];
    console.log('New Children Data', newChildrenData);
    setChildrenData(newChildrenData);
    saveChildrenDataToLocalStorage(newChildrenData);

    setSelectedChildId(newChildData);

  };

  const updateChild = async (id, updatedChild) => {
    await updateDoc(doc(firestore, 'children', id), updatedChild);
    
    const newChildrenData = childrenData.map(child => 
      child.id === id ? { ...child, ...updatedChild } : child
    );
    setChildrenData(newChildrenData);
    saveChildrenDataToLocalStorage(newChildrenData);
  };

  const deleteChild = async (id) => {
    await deleteDoc(doc(firestore, 'children', id));
    
    const newChildrenData = childrenData.filter(child => child.id !== id);
    setChildrenData(newChildrenData);
    saveChildrenDataToLocalStorage(newChildrenData);
  };

  // Function to select a child by ID
  const selectChild = (id) => {
    setSelectedChildId(id);
  };

  return (
    <ChildContext.Provider value={{  childrenData, addChild, updateChild, deleteChild, loading, selectChild, selectedChildId }}>
      {children}
    </ChildContext.Provider>
  );
};
