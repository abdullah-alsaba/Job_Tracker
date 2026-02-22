const totalCount = document.getElementById("total-count");
const interviewCount = document.getElementById("interview-count");
const rejectedCount = document.getElementById("rejected-count");
const jobCountText = document.getElementById("job-count");

const allTab = document.getElementById("all-tab");
const interviewTab = document.getElementById("interview-tab");
const rejectedTab = document.getElementById("rejected-tab");

const emptyState = document.getElementById("empty-state");

let currentFilter = "all";

function setActiveTab(activeButton) {
  const tabs = [allTab, interviewTab, rejectedTab];

  tabs.forEach((tab) => {
    tab.classList.remove("bg-[#3B82F6]", "text-white", "scale-105");
    tab.classList.add("bg-white");
  });

  activeButton.classList.remove("bg-white");
  activeButton.classList.add("bg-[#3B82F6]", "text-white", "scale-105");
}

function updateCounts() {
  const allJobs = document.querySelectorAll(".job-card");
  const interviewJobs = document.querySelectorAll(
    '.job-card[data-status="interview"]',
  );
  const rejectedJobs = document.querySelectorAll(
    '.job-card[data-status="rejected"]',
  );

  totalCount.innerText = allJobs.length;
  interviewCount.innerText = interviewJobs.length;
  rejectedCount.innerText = rejectedJobs.length;

  updateTabWiseCount();
}

function updateTabWiseCount() {
  const allJobs = document.querySelectorAll(".job-card");
  const total = allJobs.length;

  let visible = 0;

  allJobs.forEach((job) => {
    if (job.style.display !== "none") {
      visible++;
    }
  });

  jobCountText.innerText = `${visible} of ${total} jobs`;

  if (visible === 0) {
    emptyState.classList.remove("hidden");
  } else {
    emptyState.classList.add("hidden");
  }
}

function filterJobs(status) {
  currentFilter = status;
  const jobs = document.querySelectorAll(".job-card");

  jobs.forEach((job) => {
    if (status === "all") {
      job.style.display = "block";
    } else if (job.dataset.status === status) {
      job.style.display = "block";
    } else {
      job.style.display = "none";
    }
  });

  updateTabWiseCount();
}

document.querySelectorAll(".interview-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    const jobCard = btn.closest(".job-card");
    jobCard.dataset.status = "interview";

    const badge = jobCard.querySelector(".status-badge");
    badge.innerText = "Interview";
    badge.className =
      "status-badge bg-green-500 text-white px-6 py-1 rounded-md";

    updateCounts();
    filterJobs(currentFilter);
  });
});

document.querySelectorAll(".reject-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    const jobCard = btn.closest(".job-card");
    jobCard.dataset.status = "rejected";

    const badge = jobCard.querySelector(".status-badge");
    badge.innerText = "Rejected";
    badge.className = "status-badge bg-red-500 text-white px-6 py-1 rounded-md";

    updateCounts();
    filterJobs(currentFilter);
  });
});

document.querySelectorAll(".delete-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    const jobCard = btn.closest(".job-card");
    jobCard.remove();

    updateCounts();
    filterJobs(currentFilter);
  });
});

allTab.addEventListener("click", function () {
  setActiveTab(allTab);
  filterJobs("all");
});

interviewTab.addEventListener("click", function () {
  setActiveTab(interviewTab);
  filterJobs("interview");
});

rejectedTab.addEventListener("click", function () {
  setActiveTab(rejectedTab);
  filterJobs("rejected");
});

setActiveTab(allTab);
updateCounts();
