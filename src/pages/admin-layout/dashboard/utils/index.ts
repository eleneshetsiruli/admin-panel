import { NavigateFunction } from "react-router-dom";

export const navigateToUserAdd = (navigate: NavigateFunction) => {
  navigate(`/admin/dashboard/addUser`);
};

export const navigateToUserEdit = (id: string, navigate: NavigateFunction) => {
  navigate(`/admin/dashboard/editUser/${id}`);
};
