import { useState } from "react";

 export default function UseFormHandlers (type, initialData, info, setInfo) {
  const [showList, setShowList] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddOrEdit = (e) => {
    e.preventDefault();
    setInfo((prev) => {
      const updatedList = [...prev[type]];
      if (editIndex !== null) {
        updatedList[editIndex] = formData;
      } else {
        updatedList.push(formData);
      }
      return {
        ...prev,
        [type]: updatedList,
      };
    });
    setFormData(initialData);
    setShowForm(false);
    setShowList(true);
    setEditIndex(null);
  };

  const handleEdit = (index) => {
    setFormData(info[type][index]);
    setEditIndex(index);
    setShowForm(true);
    setShowList(false);
  };

  const handleDelete = (index) => {
    setInfo((prev) => ({
      ...prev,
      [type]: prev[type].filter((_, i) => i !== index),
    }));
  };

  const toggleShowList = () => {
    setShowForm(false);
    setShowList(!showList);
  };

  const toggleShowForm = () => {
    setShowForm(!showForm);
    setShowList(false);
  };

  return {
    showList,
    showForm,
    formData,
    editIndex,
    handleChange,
    handleAddOrEdit,
    handleEdit,
    handleDelete,
    toggleShowList,
    toggleShowForm,
  };
};
