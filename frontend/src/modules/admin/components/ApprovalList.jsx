import React from "react";

const ApprovalList = ({ items, type, onApprove, onReject }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border p-4">
      <h3 className="text-sm font-semibold text-slate-700 mb-3">{type} Approvals</h3>
      {items.length === 0 ? (
        <p className="text-xs text-slate-500">No pending {type.toLowerCase()}.</p>
      ) : (
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item.id} className="flex justify-between items-center border p-2 rounded-lg hover:bg-slate-50">
              <span>{item.title || item.name}</span>
              <div className="flex gap-2">
                <button
                  onClick={() => onApprove(item)}
                  className="px-2 py-1 text-xs bg-green-500 text-white rounded hover:bg-green-600"
                >
                  Approve
                </button>
                <button
                  onClick={() => onReject(item)}
                  className="px-2 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Reject
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ApprovalList;
