import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ErrorMsg from "../../ErrorMsg/ErrorMsg";
import LoadingComponent from "../../LoadingComp/LoadingComponent";
import SuccessMsg from "../../SuccessMsg/SuccessMsg";
import axios from 'axios';

export default function AddCoupon() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    billItemsPrice: 1800,
    lineAmount: 1620,
    refTpVoucherNo: "NYK-150038387-6328317-2-1",
    issueDate: "22/04/2023 01:15:28",
    billFinalAmount: 1668.6,
    billTaxAmount: 48.6,
    billDiscountAmount: 180,
    shippingAddress: {
      address: "39, mandaliwalu faliyu, kashipura Near Swaminarayan Mandir, Kashipura - GIDC",
      state: "Gujarat",
      city: "Karjan",
    },
    itemList: [
      {
        description: "04219108",
        discountAmount: 180,
        discountUnit: "Rs",
        discountValue: 180,
        hsn: "7117",
        index: "1",
        itemName: "BELT BELT108",
        itemSkuBarCode: "C14-BE108-1",
        lineAmount: 1620,
        numericSkuBarcode: 396,
        qty: 1,
        qtySellPrice: 1800,
        rateCode: "",
        retailMarkup: 0,
        taxAmount: 48.6,
        unit: "pcs",
        unitPrice: 1800,
        wholesaleMarkup: 0,
      },
    ],
  });

  //---onHandleChange---
  const onHandleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //---onHandleSubmit---
  const onHandleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make the Axios POST request
      const response = await axios.post(
        'https://invock-backend-prod.invock.in/api/i-companies/•••••••/voucher/tp',
        { data: formData },
        {
          headers: {
            'Authorization': '•••••••',
            'Content-Type': 'application/json',
          },
        }
      );

      // Handle success
      console.log('Response:', response.data);
    } catch (error) {
      // Handle error
      console.error('Error:', error);
    }

    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      billItemsPrice: 1800,
      lineAmount: 1620,
      refTpVoucherNo: "NYK-150038387-6328317-2-1",
      issueDate: "22/04/2023 01:15:28",
      billFinalAmount: 1668.6,
      billTaxAmount: 48.6,
      billDiscountAmount: 180,
      shippingAddress: {
        address: "39, mandaliwalu faliyu, kashipura Near Swaminarayan Mandir, Kashipura - GIDC",
        state: "Gujarat",
        city: "Karjan",
      },
      itemList: [
        {
          description: "04219108",
          discountAmount: 180,
          discountUnit: "Rs",
          discountValue: 180,
          hsn: "7117",
          index: "1",
          itemName: "BELT BELT108",
          itemSkuBarCode: "C14-BE108-1",
          lineAmount: 1620,
          numericSkuBarcode: 396,
          qty: 1,
          qtySellPrice: 1800,
          rateCode: "",
          retailMarkup: 0,
          taxAmount: 48.6,
          unit: "pcs",
          unitPrice: 1800,
          wholesaleMarkup: 0,
        },
      ],
    });

    // Additional logic after successful submission
  };

  //---coupon from store---
  const { loading, isAdded, error } = {};

  return (
    <>
      {error && <ErrorMsg message={error?.message} />}
      {isAdded && (
        <SuccessMsg
          message="
       Bravo, coupon created successfully
      "
        />
      )}
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Add New Coupon
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={onHandleSubmit}>
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={onHandleChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={onHandleChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={onHandleChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            {/* Bill Items Price */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Bill Items Price
              </label>
              <div className="mt-1">
                <input
                  type="number"
                  name="billItemsPrice"
                  value={formData.billItemsPrice}
                  onChange={onHandleChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            {/* Line Amount */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Line Amount
              </label>
              <div className="mt-1">
                <input
                  type="number"
                  name="lineAmount"
                  value={formData.lineAmount}
                  onChange={onHandleChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            {/* Reference TP Voucher No */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Reference TP Voucher No
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="refTpVoucherNo"
                  value={formData.refTpVoucherNo}
                  onChange={onHandleChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            {/* Issue Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Issue Date
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="issueDate"
                  value={formData.issueDate}
                  onChange={onHandleChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            {/* Bill Final Amount */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Bill Final Amount
              </label>
              <div className="mt-1">
                <input
                  type="number"
                  name="billFinalAmount"
                  value={formData.billFinalAmount}
                  onChange={onHandleChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            {/* Bill Tax Amount */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Bill Tax Amount
              </label>
              <div className="mt-1">
                <input
                  type="number"
                  name="billTaxAmount"
                  value={formData.billTaxAmount}
                  onChange={onHandleChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            {/* Bill Discount Amount */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Bill Discount Amount
              </label>
              <div className="mt-1">
                <input
                  type="number"
                  name="billDiscountAmount"
                  value={formData.billDiscountAmount}
                  onChange={onHandleChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            {/* Shipping Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Shipping Address
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="shippingAddress.address"
                  value={formData.shippingAddress.address}
                  onChange={onHandleChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            {/* Shipping State */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Shipping State
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="shippingAddress.state"
                  value={formData.shippingAddress.state}
                  onChange={onHandleChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            {/* Shipping City */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Shipping City
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="shippingAddress.city"
                  value={formData.shippingAddress.city}
                  onChange={onHandleChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            {/* Item List */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Item List
              </label>
              {/* You can add item list fields here as needed */}
            </div>

            {/* Add Coupon button */}
            <div>
              {loading ? (
                <LoadingComponent />
              ) : (
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Add Coupon
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
