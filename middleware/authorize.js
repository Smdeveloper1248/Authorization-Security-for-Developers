
import { ROLE_PERMISSIONS, ROLES} from "../config/index.js";

// Single flexible authorization middleware
export const authorize = (requiredPermissions = []) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ success: false, message: 'Unauthorized' });
    }

    const userPermissions = ROLE_PERMISSIONS[req.user.role] || [];

   // Check if user has AT LEAST ONE of the required permissions
    const hasPermission = requiredPermissions.some(perm => 
      userPermissions.includes(perm)
    );

    if (hasPermission) {
      return next();
    }

    return res.status(403).json({ 
      success: false, 
      message: 'Forbidden: Insufficient permissions' 
    });
  };
};