//* Processing student info for Exit Status section of Profile page
//* =====================================================

export const exitSection = (dataObj) => {
  let { LastActiveMonth, Q2_Outcome, Q4_Outcome, HSE_Outcome } = dataObj;

  const valueList = [LastActiveMonth, Q2_Outcome, Q4_Outcome, HSE_Outcome].map(
    (item) => {
      return item === "null" ? "Not Applicable" : item;
    }
  );
  const sectionContent = `
<div class="box-title">Exit status</div>
<div class="row">
<div class="col-md-5 rubrique">Last month of attendance:</div>
<div class="col-md-7">${valueList[0]}</div>
</div>

<div class="row">
  <div class="col-md-5 rubrique">Employment Q2:</div>
  <div class="col-md-7">${valueList[1]}</div>
</div>
<div class="row">
  <div class="col-md-5 rubrique">Employment Q4:</div>
  <div class="col-md-7">${valueList[2]}</div>
</div>

<div class="row">
  <div class="col-md-5 rubrique">HSE outcome:</div>
  <div class="col-md-7">${valueList[3]}</div>
</div>`;

  return [".exit", sectionContent];
};
