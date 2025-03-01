import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Login = () => {


  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <div className="relative p-1 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
          <div className=" bg-white rounded-lg p-6 shadow-lg">
            <h3 className="font-bold text-xl text-red-500">⚠ Sorry!</h3>
            <p className="py-4 text-gray-700">This functionality is not available at the moment.</p>
            <div className="modal-action">
              <form method="dialog">
                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                  Close
                </button>
              </form>
            </div>
          </div>
        </div>
      </dialog>

    </>
  );
};

export default Login;
