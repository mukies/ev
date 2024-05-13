import { useState } from "react";
import InquiryCard from "../popup/InquiryCard";
import DeletePopup from "../popup/DeletePopup";
import { toast } from "react-toastify";
import axios from "axios";

/* eslint-disable react/prop-types */
function InquiryTable({ item, setInquiries }) {
  const [card, setCard] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleDelete = async () => {
    if (!loading) {
      try {
        setLoading(true);
        const { data } = await axios.delete(
          `/api/inquiry/remove-inquiry/${item._id}`
        );
        if (data.success) {
          toast.success("Inquiry deleted.");
          setInquiries((p) => p.filter((itm) => item._id !== itm._id));
        } else {
          toast.error(data.message);
        }
      } catch (error) {
        toast.error(error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <tr className="px-2 sm:px-0">
      <td>
        <div className="flex items-center gap-3">
          <div>
            <div className="font-semibold capitalize">{item.name}</div>
          </div>
        </div>
      </td>
      <td>{item.email}</td>
      <td>{item.location}</td>
      <th className="flex items-center gap-1 ">
        <button onClick={() => setCard(item)} className="btn btn-ghost btn-sm">
          details
        </button>
        <button
          onClick={() => setShowPopup(true)}
          className="btn btn-ghost btn-outline border-[red] text-[red] btn-sm hover:bg-[red] hover:text-white hover:border-[red]"
        >
          delete
        </button>
      </th>
      {card && <InquiryCard setCard={setCard} cardItem={card} />}
      {showPopup && <DeletePopup cancel={setShowPopup} action={handleDelete} />}
    </tr>
  );
}

export default InquiryTable;
