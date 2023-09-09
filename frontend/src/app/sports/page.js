'use client'
import ProtectedRoute from "../../../utils/ProtectedRoute"

const ProtectedPage = () => {
    return (
      <div>
        <h2>Protected Page</h2>
      </div>
    );
  };

  export default ProtectedRoute(ProtectedPage);