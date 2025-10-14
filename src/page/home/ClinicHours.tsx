import styles from '@/page/home/home.module.scss';

const clinicScheduleData = [
  {
    timeSlot: '10:00～<br class="sp_br" />12:30',
    days: {
      monday: true,
      tuesday: true,
      wednesday: true,
      thursday: true,
      friday: true,
      saturday: false,
      sunday: false,
    },
  },
  {
    timeSlot: '14:30～<br class="sp_br" />17:30',
    days: {
      monday: true,
      tuesday: true,
      wednesday: true,
      thursday: true,
      friday: true,
      saturday: false,
      sunday: false,
    },
  },
];

const dayNames = ['月', '火', '水', '木', '金', '土', '日/祝'];

const dayKeys = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday',
];

const ClinicHours = () => {
  return (
    <table className={styles.home__clinicHoursTable}>
      <thead>
        <tr className={styles.home__clinicHoursHead}>
          <th>診療時間</th>
          {dayNames.map((day, index) => (
            <th key={index} className={styles.home__clinicHoursHeadRow}>
              {day}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {clinicScheduleData.map((schedule, index) => (
          <tr key={index} className={styles.home__clinicHoursBody}>
            <td>
              <span
                className={styles.home__clinicHoursBodyTimeSlot}
                dangerouslySetInnerHTML={{ __html: schedule.timeSlot }}
              />
            </td>
            {dayKeys.map((dayKey, dayIndex) => {
              const isOpen =
                schedule.days[dayKey as keyof typeof schedule.days];
              return (
                <td
                  key={dayIndex}
                  className={`${styles.home__clinicHoursRow} ${isOpen ? `${styles.home__clinicHoursRow_red}` : ''}`}
                >
                  {isOpen ? '⚫︎' : '休'}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export { ClinicHours };
