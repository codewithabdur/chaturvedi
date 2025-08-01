import React, { useEffect, useState } from "react";

const StepFour = ({ setRequiredFields, requiredFields, showErrors }) => {
  const [stepData, setStepData] = useState({
    newPolicyStartDate: "",
    newPolicyEndDate: "",
    ncbNewPolicy: "",
    brokerAgencyName: "",
    policyNumber: "",
    insurerName: "",
    policyIssueDate: "",
    idv: "",
    paCover: "No",
    odAmount: "",
    tpAmount: "",
    netTotal: "",
    gstAmount: "",
    totalPremium: "",
    breakingCharge: "",
    waiverAmount: "",
    netPayable: "",
    pacertificateNumber: "",
    paStartDate: "",
    paCoverAmount: "",
    paEndDate: ""
  });

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("stepData"));
    if (stored) setStepData(prev => ({ ...prev, ...stored }));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updated = { ...stepData, [name]: value };
    setStepData(updated);
    localStorage.setItem("stepData", JSON.stringify(updated));
  };

  useEffect(() => {
    document.title = "Chaturvedi Motors Form || Step 4";

  }, []);

  useEffect(() => {
    let fields = []
    // Optionally define required fields
    if (stepData.paCover === "Yes") {
      fields.push("pacertificateNumber", "paStartDate", "paEndDate", "paCoverAmount",);
    }
    fields.push("newPolicyStartDate",
      "newPolicyEndDate",
      "ncbNewPolicy",
      "brokerAgencyName",
      "policyNumber",
      "insurerName",
      "policyIssueDate",
      "idv",
      "odAmount",
      "tpAmount",
      "netTotal",
      "gstAmount",
      "totalPremium",
      "netPayable",
      
    );
    setRequiredFields(fields);
  }, [])

  return (
    <div className="capitalize grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label>New Policy Start Date <span className="text-[#f00]">*</span></label>
        <input type="date" name="newPolicyStartDate" value={stepData.newPolicyStartDate} onChange={handleChange}
          className={`w-full border px-4 py-2 ${showErrors && stepData?.newPolicyStartDate === "" && !stepData?.newPolicyStartDate ? "border-red-500" : "border-[#e6e6e6]"} rounded`} />
           {showErrors && stepData?.newPolicyStartDate === "" && !stepData?.newPolicyStartDate && (
              <p className="text-sm text-red-500 mt-1">This field is required.</p>
            )}
      </div>
      <div>
        <label>New Policy End Date <span className="text-[#f00]">*</span></label>
        <input type="date" name="newPolicyEndDate" value={stepData.newPolicyEndDate} onChange={handleChange}
          className={`w-full border px-4 py-2 ${showErrors && stepData?.newPolicyEndDate === "" && !stepData?.newPolicyEndDate ? "border-red-500" : "border-[#e6e6e6]"} rounded`} />
           {showErrors && stepData?.newPolicyEndDate === "" && !stepData?.newPolicyEndDate && (
              <p className="text-sm text-red-500 mt-1">This field is required.</p>
            )}
      </div>
      <div>
        <label>NCB For New Policy <span className="text-[#f00]">*</span></label>
        <select name="ncbNewPolicy" value={stepData.ncbNewPolicy} onChange={handleChange}
          className={`w-full border custom-select px-4 py-2 ${showErrors && stepData?.ncbNewPolicy === "" && !stepData?.ncbNewPolicy ? "border-red-500" : "border-[#e6e6e6]"} rounded`}>
          <option value="">Select</option>
          <option value="0">0%</option>
          <option value="20">20%</option>
          <option value="25">25%</option>
          <option value="35">35%</option>
          <option value="45">45%</option>
          <option value="50">50%</option>
        </select>
        {showErrors && stepData?.ncbNewPolicy === "" && !stepData?.ncbNewPolicy && (
              <p className="text-sm text-red-500 mt-1">This field is required.</p>
            )}
      </div>
      <div>
        <label>Broker or Agency Name <span className="text-[#f00]">*</span></label>
        <select name="brokerAgencyName" value={stepData.brokerAgencyName} onChange={handleChange}
          className={`w-full border custom-select px-4 py-2 ${showErrors && stepData?.brokerAgencyName === "" && !stepData?.brokerAgencyName ? "border-red-500" : "border-[#e6e6e6]"} rounded`}>
          <option value="">Select</option>
          <option value="PROBUS - Chitra Chaturvedi">PROBUS - Chitra Chaturvedi</option>
          <option value="UNITED INDIA - Satya Prakash">UNITED INDIA - Satya Prakash</option>
          <option value="POLICY BOSS - Sapna">POLICY BOSS - Sapna</option>
          <option value="HOPE BOX - Satya Prakash">HOPE BOX - Satya Prakash</option>
          <option value="TURTLE MINT - Yatendra Kumar">TURTLE MINT - Yatendra Kumar</option>
          <option value="UNIVERSAL SOMPO GENERAL INSURANCE - Yatendra Kumar">UNIVERSAL SOMPO GENERAL INSURANCE - Yatendra Kumar</option>
          <option value="RELIANCE GENERAL INSURANCE - Khem Chand">RELIANCE GENERAL INSURANCE - Khem Chand</option>
          <option value="PB PARTNER - Ravi Shankar">PB PARTNER - Ravi Shankar</option>
          <option value="PB PARTNER - Shiv Kumar">PB PARTNER - Shiv Kumar</option>
          <option value="PB PARTNER - Pavan Chaturvedi">PB PARTNER - Pavan Chaturvedi</option>
          <option value="PB PARTNER - Dheeraj Kumar">PB PARTNER - Dheeraj Kumar</option>
          <option value="GIRNAR - Rekha">GIRNAR - Rekha</option>
          <option value="GIRNAR - Satya Prakash">GIRNAR - Satya Prakash</option>
          <option value="GOODS INSURANCE BROKRAGE">GOODS INSURANCE BROKRAGE</option>
          <option value="TATA INSURANCE BROKRAGE - Chitra Chaturvedi">TATA INSURANCE BROKRAGE - Chitra Chaturvedi</option>
        </select>
        {showErrors && stepData?.brokerAgencyName === "" && !stepData?.brokerAgencyName && (
              <p className="text-sm text-red-500 mt-1">This field is required.</p>
            )}
      </div>
      <div>
        <label>Policy Number <span className="text-[#f00]">*</span></label>
        <input type="text" name="policyNumber" value={stepData.policyNumber} onChange={handleChange}
          className={`w-full border px-4 py-2 ${showErrors && stepData?.policyNumber === "" && !stepData?.policyNumber ? "border-red-500" : "border-[#e6e6e6]"} rounded`} />
            {showErrors && stepData?.policyNumber === "" && !stepData?.policyNumber && (
              <p className="text-sm text-red-500 mt-1">This field is required.</p>
            )}
      </div>
      <div>
        <label>Insurer Name <span className="text-[#f00]">*</span> </label>
        <select name="insurerName" value={stepData.insurerName} onChange={handleChange}
          className={`w-full border custom-select px-4 py-2 ${showErrors && stepData?.insurerName === "" && !stepData?.insurerName ? "border-red-500" : "border-[#e6e6e6]"} rounded`}>
          <option value="">Select</option>
          <option value="Acko General Insurance Limited">Acko General Insurance Limited</option>
          <option value="Bajaj Allianz General Insurance Company Limited">Bajaj Allianz General Insurance Company Limited</option>
          <option value="Cholamandalam MS General Insurance Company Limited">Cholamandalam MS General Insurance Company Limited</option>
          <option value="Future Generali India Insurance Company Limited">Future Generali India Insurance Company Limited</option>
          <option value="Go Digit General Insurance Limited">Go Digit General Insurance Limited</option>
          <option value="HDFC ERGO General Insurance Company Limited">HDFC ERGO General Insurance Company Limited</option>
          <option value="ICICI LOMBARD General Insurance Company Limited">ICICI LOMBARD General Insurance Company Limited</option>
          <option value="IFFCO TOKIO General Insurance Company Limited">IFFCO TOKIO General Insurance Company Limited</option>
          <option value="Zurich Kotak General Insurance Company">Zurich Kotak General Insurance Company</option>
          <option value="Liberty General Insurance Limited">Liberty General Insurance Limited</option>
          <option value="Magma General Insurance Limited">Magma General Insurance Limited</option>
          <option value="National Insurance Company Limited">National Insurance Company Limited</option>
          <option value="Raheja QBE General Insurance Co. Ltd.">Raheja QBE General Insurance Co. Ltd.</option>
          <option value="Reliance General Insurance Company Limited">Reliance General Insurance Company Limited</option>
          <option value="Royal Sundaram General Insurance Company Limited">Royal Sundaram General Insurance Company Limited</option>
          <option value="SBI General Insurance Company Limited">SBI General Insurance Company Limited</option>
          <option value="Shriram General Insurance Company Limited">Shriram General Insurance Company Limited</option>
          <option value="Tata AIG General Insurance Company Limited">Tata AIG General Insurance Company Limited</option>
          <option value="The New India Assurance Company Limited">The New India Assurance Company Limited</option>
          <option value="The Oriental Insurance Company Limited">The Oriental Insurance Company Limited</option>
          <option value="United India Insurance Company Limited">United India Insurance Company Limited</option>
          <option value="Universal Sompo General Insurance Company Limited">Universal Sompo General Insurance Company Limited</option>
          <option value="Zuno General Insurance Ltd">Zuno General Insurance Ltd</option>
          <option value="Navi General Insurance Limited">Navi General Insurance Limited</option>
          {/* Add more insurers as needed */}
        </select>
            {showErrors && stepData?.insurerName === "" && !stepData?.insurerName && (
              <p className="text-sm text-red-500 mt-1">This field is required.</p>
            )}
      </div>
      <div>
        <label>Policy Issue Date <span className="text-[#f00]">*</span></label>
        <input type="date" name="policyIssueDate" value={stepData.policyIssueDate} onChange={handleChange}
          className={`w-full border px-4 py-2 ${showErrors && stepData?.policyIssueDate === "" && !stepData?.policyIssueDate ? "border-red-500" : "border-[#e6e6e6]"} rounded`} />
           {showErrors && stepData?.policyIssueDate === "" && !stepData?.policyIssueDate && (
              <p className="text-sm text-red-500 mt-1">This field is required.</p>
            )}
      </div>
      <div>
        <label>IDV (Insured Declared Value) <span className="text-[#f00]">*</span></label>
        <input type="text" name="idv" value={stepData.idv} onChange={handleChange}
          className={`w-full border px-4 py-2 ${showErrors && stepData?.idv === "" && !stepData?.idv ? "border-red-500" : "border-[#e6e6e6]"} rounded`} />
           {showErrors && stepData?.idv === "" && !stepData?.idv && (
              <p className="text-sm text-red-500 mt-1">This field is required.</p>
            )}
      </div>
      <div>
        <label>PA Cover</label>
        <select name="paCover" value={stepData.paCover} onChange={handleChange}
          className="w-full border custom-select px-4 py-2 border-[#e6e6e6] rounded">
          <option value="No">No</option>
          <option value="Yes">Yes</option>
        </select>
      </div>
      {stepData.paCover === "Yes" && (<>
        <div>
          <label>PA Certificate Number <span className="text-[#f00]">*</span></label>
          <input name="pacertificateNumber" value={stepData.pacertificateNumber} onChange={handleChange}
            className={`w-full border custom-select px-4 py-2 ${showErrors && stepData?.pacertificateNumber === "" && !stepData?.pacertificateNumber ? "border-red-500" : "border-[#e6e6e6]"} rounded`} />
              {showErrors && stepData?.pacertificateNumber === "" && !stepData?.pacertificateNumber && (
              <p className="text-sm text-red-500 mt-1">This field is required.</p>
            )}
        </div>
        <div>
          <label>PA Start Date <span className="text-[#f00]">*</span></label>
          <input name="paStartDate" type="date" value={stepData.paStartDate} onChange={handleChange}
            className={`w-full border custom-select px-4 py-2 ${showErrors && stepData?.paStartDate === "" && !stepData?.paStartDate ? "border-red-500" : "border-[#e6e6e6]"} rounded`} />
          {showErrors && stepData?.paStartDate === "" && !stepData?.paStartDate && (
              <p className="text-sm text-red-500 mt-1">This field is required.</p>
            )}
        </div>
        <div>
          <label>PA End Date <span className="text-[#f00]">*</span></label>
          <input name="paEndDate" type="date" value={stepData.paEndDate} onChange={handleChange}
            className={`w-full border custom-select px-4 py-2 ${showErrors && stepData?.paEndDate === "" && !stepData?.paEndDate ? "border-red-500" : "border-[#e6e6e6]"} rounded`} />
          {showErrors && stepData?.paEndDate === "" && !stepData?.paEndDate && (
              <p className="text-sm text-red-500 mt-1">This field is required.</p>
            )}
        </div>
        <div>
          <label>PA Cover Amount <span className="text-[#f00]">*</span></label>
          <input name="paCoverAmount" type="text" value={stepData.paCoverAmount} onChange={handleChange}
            className={`w-full border custom-select px-4 py-2 ${showErrors && stepData?.paCoverAmount === "" && !stepData?.paCoverAmount ? "border-red-500" : "border-[#e6e6e6]"} rounded`} />
          {showErrors && stepData?.paCoverAmount === "" && !stepData?.paCoverAmount && (
              <p className="text-sm text-red-500 mt-1">This field is required.</p>
            )}
        </div>
      </>)}
      <div>
        <label>OD Amount <span className="text-[#f00]">*</span></label>
        <input type="text" name="odAmount" value={stepData.odAmount} onChange={handleChange}
          className={`w-full border px-4 py-2 ${showErrors && stepData?.odAmount === "" && !stepData?.odAmount ? "border-red-500" : "border-[#e6e6e6]"} rounded`} />
        {showErrors && stepData?.odAmount === "" && !stepData?.odAmount && (
          <p className="text-sm text-red-500 mt-1">This field is required.</p>
        )}
      </div>
      <div>
        <label>TP Amount <span className="text-[#f00]">*</span></label>
        <input type="text" name="tpAmount" value={stepData.tpAmount} onChange={handleChange}
          className={`w-full border px-4 py-2 ${showErrors && stepData?.tpAmount === "" && !stepData?.tpAmount ? "border-red-500" : "border-[#e6e6e6]"} rounded`} />
      {showErrors && stepData?.tpAmount === "" && !stepData?.tpAmount && (
              <p className="text-sm text-red-500 mt-1">This field is required.</p>
            )}
      </div>
      <div>
        <label>Net Total (OD + TP) <span className="text-[#f00]">*</span></label>
        <input type="text" name="netTotal" value={Number(stepData.odAmount || 0) + Number(stepData.tpAmount || 0)}
          className="w-full border px-4 py-2 border-[#e6e6e6] rounded" />
      </div>
      <div>
        <label>GST Amount <span className="text-[#f00]">*</span></label>
        <input type="text" name="gstAmount" value={stepData.gstAmount} onChange={handleChange}
          className={`w-full border px-4 py-2 ${showErrors && stepData?.gstAmount === "" && !stepData?.gstAmount ? "border-red-500" : "border-[#e6e6e6]"} rounded`} />
        {showErrors && stepData?.gstAmount === "" && !stepData?.gstAmount && (
          <p className="text-sm text-red-500 mt-1">This field is required.</p>
        )}
      </div>
      <div>
        <label>Total Premium with GST <span className="text-[#f00]">*</span></label>
        <input type="text" name="totalPremium" value={Number(stepData.gstAmount || 0) + Number(stepData.odAmount || 0) + Number(stepData.tpAmount || 0)} 
          className="w-full border px-4 py-2 border-[#e6e6e6] rounded" />
      </div>
      <div>
        <label>Breaking Charge <span className="text-[#f00]">*</span></label>
        <input type="text" name="breakingCharge" value={stepData.breakingCharge} onChange={handleChange}
          className={`w-full border px-4 py-2  rounded`} />

      </div>
      <div>
        <label>Waiver Amount</label>
        <input type="text" name="waiverAmount" value={stepData.waiverAmount} onChange={handleChange}
          className="w-full border px-4 py-2 border-[#e6e6e6] rounded" />
      </div>
      <div>
        <label>Net Payable <span className="text-[#f00]">*</span></label>
        <input type="text" name="netPayable" value={Number(stepData.paCoverAmount) + Number(stepData.gstAmount || 0) + Number(stepData.odAmount || 0) + Number(stepData.tpAmount || 0) + Number(stepData.breakingCharge || 0) - Number(stepData.waiverAmount || 0)} 
          className="w-full border px-4 py-2 border-[#e6e6e6] rounded" />
      </div>
    </div>
  );
};

export default StepFour;
