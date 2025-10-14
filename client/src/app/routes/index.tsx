import { memo } from "react";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "../pages/notfound-page";
//
import AuthRouter from "@/features/auth";
import UploadRouter from "@/features/upload";
import KanbanRouter from "@/features/kanban";
import AuthProtectedRoute from "./AuthProtectedRoute";
import HomePage from "../pages/home-page";

const MainRouter = () => {
  return (
    <Routes>
      {/* public */}
      <Route index element={<HomePage />} />
      <Route path="*" element={<NotFoundPage />} />
      {/* auth */}
      <Route path="auth/*" element={<AuthRouter />} />
      {/* upload */}
      <Route path="upload/*" element={<UploadRouter />} />

      <Route element={<AuthProtectedRoute />}>
        {/* kanban */}
        <Route path="kanban/*" element={<KanbanRouter />} />
      </Route>
    </Routes>
  );
};

export default memo(MainRouter);
