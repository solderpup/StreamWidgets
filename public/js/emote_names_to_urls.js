const emoteURLs = {
    "hand-pink-waving": "https://yt3.ggpht.com/KOxdr_z3A5h1Gb7kqnxqOCnbZrBmxI2B_tRQ453BhTWUhYAlpg5ZP8IKEBkcvRoY8grY91Q=w48-h48-c-k-nd",
    "face-blue-smiling": "https://yt3.ggpht.com/cktIaPxFwnrPwn-alHvnvedHLUJwbHi8HCK3AgbHpphrMAW99qw0bDfxuZagSY5ieE9BBrA=w48-h48-c-k-nd",
    "face-red-droopy-eyes": "https://yt3.ggpht.com/oih9s26MOYPWC_uL6tgaeOlXSGBv8MMoDrWzBt-80nEiVSL9nClgnuzUAKqkU9_TWygF6CI=w48-h48-c-k-nd",
    "face-purple-crying": "https://yt3.ggpht.com/g6_km98AfdHbN43gvEuNdZ2I07MmzVpArLwEvNBwwPqpZYzszqhRzU_DXALl11TchX5_xFE=w48-h48-c-k-nd",
    "text-green-game-over": "https://yt3.ggpht.com/cr36FHhSiMAJUSpO9XzjbOgxhtrdJNTVJUlMJeOOfLOFzKleAKT2SEkZwbqihBqfTXYCIg=w48-h48-c-k-nd",
    "person-turquoise-waving": "https://yt3.ggpht.com/uNSzQ2M106OC1L3VGzrOsGNjopboOv-m1bnZKFGuh0DxcceSpYHhYbuyggcgnYyaF3o-AQ=w48-h48-c-k-nd",
    "face-green-smiling": "https://yt3.ggpht.com/G061SAfXg2bmG1ZXbJsJzQJpN8qEf_W3f5cb5nwzBYIV58IpPf6H90lElDl85iti3HgoL3o=w48-h48-c-k-nd",
    "face-orange-frowning": "https://yt3.ggpht.com/Ar8jaEIxzfiyYmB7ejDOHba2kUMdR37MHn_R39mtxqO5CD4aYGvjDFL22DW_Cka6LKzhGDk=w48-h48-c-k-nd",
    "eyes-purple-crying": "https://yt3.ggpht.com/FrYgdeZPpvXs-6Mp305ZiimWJ0wV5bcVZctaUy80mnIdwe-P8HRGYAm0OyBtVx8EB9_Dxkc=w48-h48-c-k-nd",
    "face-fuchsia-wide-eyes": "https://yt3.ggpht.com/zdcOC1SMmyXJOAddl9DYeEFN9YYcn5mHemJCdRFQMtDuS0V-IyE-5YjNUL1tduX1zs17tQ=w48-h48-c-k-nd",
    "cat-orange-whistling": "https://yt3.ggpht.com/0ocqEmuhrKCK87_J21lBkvjW70wRGC32-Buwk6TP4352CgcNjL6ug8zcsel6JiPbE58xhq5g=w48-h48-c-k-nd",
    "face-blue-wide-eyes": "https://yt3.ggpht.com/2Ht4KImoWDlCddiDQVuzSJwpEb59nZJ576ckfaMh57oqz2pUkkgVTXV8osqUOgFHZdUISJM=w48-h48-c-k-nd",
    "face-orange-raised-eyebrow": "https://yt3.ggpht.com/JbCfmOgYI-mO17LPw8e_ycqbBGESL8AVP6i7ZsBOVLd3PEpgrfEuJ9rEGpP_unDcqgWSCg=w48-h48-c-k-nd",
    "face-fuchsia-tongue-out": "https://yt3.ggpht.com/EURfJZi_heNulV3mfHzXBk8PIs9XmZ9lOOYi5za6wFMCGrps4i2BJX9j-H2gK6LIhW6h7sY=w48-h48-c-k-nd",
    "face-orange-biting-nails": "https://yt3.ggpht.com/HmsXEgqUogkQOnL5LP_FdPit9Z909RJxby-uYcPxBLNhaPyqPTcGwvGaGPk2hzB_cC0hs_pV=w48-h48-c-k-nd",
    "face-red-heart-shape": "https://yt3.ggpht.com/I0Mem9dU_IZ4a9cQPzR0pUJ8bH-882Eg0sDQjBmPcHA6Oq0uXOZcsjPvPbtormx91Ha2eRA=w48-h48-c-k-nd",
    "face-fuchsia-poop-shape": "https://yt3.ggpht.com/_xlyzvSimqMzhdhODyqUBLXIGA6F_d5en2bq-AIfc6fc3M7tw2jucuXRIo5igcW3g9VVe3A=w48-h48-c-k-nd",
    "face-purple-wide-eyes": "https://yt3.ggpht.com/5RDrtjmzRQKuVYE_FKPUHiGh7TNtX5eSNe6XzcSytMsHirXYKunxpyAsVacTFMg0jmUGhQ=w48-h48-c-k-nd",
    "glasses-purple-yellow-diamond": "https://yt3.ggpht.com/EnDBiuksboKsLkxp_CqMWlTcZtlL77QBkbjz_rLedMSDzrHmy_6k44YWFy2rk4I0LG6K2KI=w48-h48-c-k-nd",
    "face-pink-tears": "https://yt3.ggpht.com/RL5QHCNcO_Mc98SxFEblXZt9FNoh3bIgsjm0Kj8kmeQJWMeTu7JX_NpICJ6KKwKT0oVHhAA=w48-h48-c-k-nd",
    "body-blue-raised-arms": "https://yt3.ggpht.com/2Jds3I9UKOfgjid97b_nlDU4X2t5MgjTof8yseCp7M-6ZhOhRkPGSPfYwmE9HjCibsfA1Uzo=w48-h48-c-k-nd",
    "hand-orange-covering-eyes": "https://yt3.ggpht.com/y8ppa6GcJoRUdw7GwmjDmTAnSkeIkUptZMVQuFmFaTlF_CVIL7YP7hH7hd0TJbd8p9w67IM=w48-h48-c-k-nd",
    "trophy-yellow-smiling": "https://yt3.ggpht.com/7tf3A_D48gBg9g2N0Rm6HWs2aqzshHU4CuVubTXVxh1BP7YDBRC6pLBoC-ibvr-zCl_Lgg=w48-h48-c-k-nd",
    "eyes-pink-heart-shape": "https://yt3.ggpht.com/5vzlCQfQQdzsG7nlQzD8eNjtyLlnATwFwGvrMpC8dgLcosNhWLXu8NN9qIS3HZjJYd872dM=w48-h48-c-k-nd",
    "face-turquoise-covering-eyes": "https://yt3.ggpht.com/H2HNPRO8f4SjMmPNh5fl10okSETW7dLTZtuE4jh9D6pSmaUiLfoZJ2oiY-qWU3Owfm1IsXg=w48-h48-c-k-nd",
    "hand-green-crystal-ball": "https://yt3.ggpht.com/qZfJrWDEmR03FIak7PMNRNpMjNsCnOzD9PqK8mOpAp4Kacn_uXRNJNb99tE_1uyEbvgJReF2=w48-h48-c-k-nd",
    "face-turquoise-drinking-coffee": "https://yt3.ggpht.com/myqoI1MgFUXQr5fuWTC9mz0BCfgf3F8GSDp06o1G7w6pTz48lwARjdG8vj0vMxADvbwA1dA=w48-h48-c-k-nd",
    "body-green-covering-eyes": "https://yt3.ggpht.com/UR8ydcU3gz360bzDsprB6d1klFSQyVzgn-Fkgu13dIKPj3iS8OtG1bhBUXPdj9pMwtM00ro=w48-h48-c-k-nd",
    "goat-turquoise-white-horns": "https://yt3.ggpht.com/jMnX4lu5GnjBRgiPtX5FwFmEyKTlWFrr5voz-Auko35oP0t3-zhPxR3PQMYa-7KhDeDtrv4=w48-h48-c-k-nd",
    "hand-purple-blue-peace": "https://yt3.ggpht.com/-sC8wj6pThd7FNdslEoJlG4nB9SIbrJG3CRGh7-bNV0RVfcrJuwiWHoUZ6UmcVs7sQjxTg4=w48-h48-c-k-nd",
    "face-blue-question-mark": "https://yt3.ggpht.com/Wx4PMqTwG3f4gtR7J9Go1s8uozzByGWLSXHzrh3166ixaYRinkH_F05lslfsRUsKRvHXrDk=w48-h48-c-k-nd",
    "face-blue-covering-eyes": "https://yt3.ggpht.com/kj3IgbbR6u-mifDkBNWVcdOXC-ut-tiFbDpBMGVeW79c2c54n5vI-HNYCOC6XZ9Bzgupc10=w48-h48-c-k-nd",
    "face-purple-smiling-fangs": "https://yt3.ggpht.com/k1vqi6xoHakGUfa0XuZYWHOv035807ARP-ZLwFmA-_NxENJMxsisb-kUgkSr96fj5baBOZE=w48-h48-c-k-nd",
    "face-purple-sweating": "https://yt3.ggpht.com/tRnrCQtEKlTM9YLPo0vaxq9mDvlT0mhDld2KI7e_nDRbhta3ULKSoPVHZ1-bNlzQRANmH90=w48-h48-c-k-nd",
    "face-purple-smiling-tears": "https://yt3.ggpht.com/MJV1k3J5s0hcUfuo78Y6MKi-apDY5NVDjO9Q7hL8fU4i0cIBgU-cU4rq4sHessJuvuGpDOjJ=w48-h48-c-k-nd",
    "face-blue-star-eyes": "https://yt3.ggpht.com/m_ANavMhp6cQ1HzX0HCTgp_er_yO2UA28JPbi-0HElQgnQ4_q5RUhgwueTpH-st8L3MyTA=w48-h48-c-k-nd",
    "face-blue-heart-eyes": "https://yt3.ggpht.com/M9tzKd64_r3hvgpTSgca7K3eBlGuyiqdzzhYPp7ullFAHMgeFoNLA0uQ1dGxj3fXgfcHW4w=w48-h48-c-k-nd",
    "face-blue-three-eyes": "https://yt3.ggpht.com/nSQHitVplLe5uZC404dyAwv1f58S3PN-U_799fvFzq-6b3bv-MwENO-Zs1qQI4oEXCbOJg=w48-h48-c-k-nd",
    "face-blue-droopy-eyes": "https://yt3.ggpht.com/hGPqMUCiXGt6zuX4dHy0HRZtQ-vZmOY8FM7NOHrJTta3UEJksBKjOcoE6ZUAW9sz7gIF_nk=w48-h48-c-k-nd",
    "planet-orange-purple-ring": "https://yt3.ggpht.com/xkaLigm3P4_1g4X1JOtkymcC7snuJu_C5YwIFAyQlAXK093X0IUjaSTinMTLKeRZ6280jXg=w48-h48-c-k-nd",
    "face-turquoise-speaker-shape": "https://yt3.ggpht.com/WTFFqm70DuMxSC6ezQ5Zs45GaWD85Xwrd9Sullxt54vErPUKb_o0NJQ4kna5m7rvjbRMgr3A=w48-h48-c-k-nd",
    "octopus-red-waving": "https://yt3.ggpht.com/L9Wo5tLT_lRQX36iZO_fJqLJR4U74J77tJ6Dg-QmPmSC_zhVQ-NodMRc9T0ozwvRXRaT43o=w48-h48-c-k-nd",
    "pillow-turquoise-hot-chocolate": "https://yt3.ggpht.com/cAR4cehRxbn6dPbxKIb-7ShDdWnMxbaBqy2CXzBW4aRL3IqXs3rxG0UdS7IU71OEU7LSd20q=w48-h48-c-k-nd",
    "hourglass-purple-sand-orange": "https://yt3.ggpht.com/MFDLjasPt5cuSM_tK5Fnjaz_k08lKHdX_Mf7JkI6awaHriC3rGL7J_wHxyG6PPhJ8CJ6vsQ=w48-h48-c-k-nd",
    "fish-orange-wide-eyes": "https://yt3.ggpht.com/iQLKgKs7qL3091VHgVgpaezc62uPewy50G_DoI0dMtVGmQEX5pflZrUxWfYGmRfzfUOOgJs=w48-h48-c-k-nd",
    "popcorn-yellow-striped-smile": "https://yt3.ggpht.com/TW_GktV5uVYviPDtkCRCKRDrGlUc3sJ5OHO81uqdMaaHrIQ5-sXXwJfDI3FKPyv4xtGpOlg=w48-h48-c-k-nd",
    "penguin-blue-waving-tear": "https://yt3.ggpht.com/p2u7dcfZau4_bMOMtN7Ma8mjHX_43jOjDwITf4U9adT44I-y-PT7ddwPKkfbW6Wx02BTpNoC=w48-h48-c-k-nd",
    "clock-turquoise-looking-up": "https://yt3.ggpht.com/tDnDkDZykkJTrsWEJPlRF30rmbek2wcDcAIymruOvSLTsUFIZHoAiYTRe9OtO-80lDfFGvo=w48-h48-c-k-nd",
    "face-red-smiling-live": "https://yt3.ggpht.com/14Pb--7rVcqnHvM7UlrYnV9Rm4J-uojX1B1kiXYvv1my-eyu77pIoPR5sH28-eNIFyLaQHs=w48-h48-c-k-nd",
    "hands-yellow-heart-red": "https://yt3.ggpht.com/qWSu2zrgOKLKgt_E-XUP9e30aydT5aF3TnNjvfBL55cTu1clP8Eoh5exN3NDPEVPYmasmoA=w48-h48-c-k-nd",
    "volcano-green-lava-orange": "https://yt3.ggpht.com/_IWOdMxapt6IBY5Cb6LFVkA3J77dGQ7P2fuvYYv1-ahigpVfBvkubOuGLSCyFJ7jvis-X8I=w48-h48-c-k-nd",
    "person-turquoise-waving-speech": "https://yt3.ggpht.com/gafhCE49PH_9q-PuigZaDdU6zOKD6grfwEh1MM7fYVs7smAS_yhYCBipq8gEiW73E0apKTzi=w48-h48-c-k-nd",
    "face-orange-tv-shape": "https://yt3.ggpht.com/EVK0ik6dL5mngojX9I9Juw4iFh053emP0wcUjZH0whC_LabPq-DZxN4Jg-tpMcEVfJ0QpcJ4=w48-h48-c-k-nd",
    "face-blue-spam-shape": "https://yt3.ggpht.com/hpwvR5UgJtf0bGkUf8Rn-jTlD6DYZ8FPOFY7rhZZL-JHj_7OPDr7XUOesilRPxlf-aW42Zg=w48-h48-c-k-nd",
    "face-fuchsia-flower-shape": "https://yt3.ggpht.com/o9kq4LQ0fE_x8yxj29ZeLFZiUFpHpL_k2OivHbjZbttzgQytU49Y8-VRhkOP18jgH1dQNSVz=w48-h48-c-k-nd",
    "person-blue-holding-pencil": "https://yt3.ggpht.com/TKgph5IHIHL-A3fgkrGzmiNXzxJkibB4QWRcf_kcjIofhwcUK_pWGUFC4xPXoimmne3h8eQ=w48-h48-c-k-nd",
    "body-turquoise-yoga-pose": "https://yt3.ggpht.com/GW3otW7CmWpuayb7Ddo0ux5c-OvmPZ2K3vaytJi8bHFjcn-ulT8vcHMNcqVqMp1j2lit2Vw=w48-h48-c-k-nd",
    "location-yellow-teal-bars": "https://yt3.ggpht.com/YgeWJsRspSlAp3BIS5HMmwtpWtMi8DqLg9fH7DwUZaf5kG4yABfE1mObAvjCh0xKX_HoIR23=w48-h48-c-k-nd",
    "person-turquoise-writing-headphones": "https://yt3.ggpht.com/DC4KrwzNkVxLZa2_KbKyjZTUyB9oIvH5JuEWAshsMv9Ctz4lEUVK0yX5PaMsTK3gGS-r9w=w48-h48-c-k-nd",
    "person-turquoise-wizard-wand": "https://yt3.ggpht.com/OiZeNvmELg2PQKbT5UCS0xbmsGbqRBSbaRVSsKnRS9gvJPw7AzPp-3ysVffHFbSMqlWKeQ=w48-h48-c-k-nd",
    "person-blue-eating-spaghetti": "https://yt3.ggpht.com/AXZ8POmCHoxXuBaRxX6-xlT5M-nJZmO1AeUNo0t4o7xxT2Da2oGy347sHpMM8shtUs7Xxh0=w48-h48-c-k-nd",
    "face-turquoise-music-note": "https://yt3.ggpht.com/-K6oRITFKVU8V4FedrqXGkV_vTqUufVCQpBpyLK6w3chF4AS1kzT0JVfJxhtlfIAw5jrNco=w48-h48-c-k-nd",
    "person-pink-swaying-hair": "https://yt3.ggpht.com/L8cwo8hEoVhB1k1TopQaeR7oPTn7Ypn5IOae5NACgQT0E9PNYkmuENzVqS7dk2bYRthNAkQ=w48-h48-c-k-nd",
    "person-blue-speaking-microphone": "https://yt3.ggpht.com/FMaw3drKKGyc6dk3DvtHbkJ1Ki2uD0FLqSIiFDyuChc1lWcA9leahX3mCFMBIWviN2o8eyc=w48-h48-c-k-nd",
    "rocket-red-countdown-liftoff": "https://yt3.ggpht.com/lQZFYAeWe5-SJ_fz6dCAFYz1MjBnEek8DvioGxhlj395UFTSSHqYAmfhJN2i0rz3fDD5DQ=w48-h48-c-k-nd",
    "face-purple-rain-drops": "https://yt3.ggpht.com/woHW5Jl2RD0qxijnl_4vx4ZhP0Zp65D4Ve1DM_HrwJW-Kh6bQZoRjesGnEwjde8F4LynrQ=w48-h48-c-k-nd",
    "face-pink-drinking-tea": "https://yt3.ggpht.com/WRLIgKpnClgYOZyAwnqP-Edrdxu6_N19qa8gsB9P_6snZJYIMu5YBJX8dlM81YG6H307KA=w48-h48-c-k-nd",
    "person-purple-stage-event": "https://yt3.ggpht.com/YeVVscOyRcDJAhKo2bMwMz_B6127_7lojqafTZECTR9NSEunYO5zEi7R7RqxBD7LYLxfNnXe=w48-h48-c-k-nd",
    "face-purple-open-box": "https://yt3.ggpht.com/7lJM2sLrozPtNLagPTcN0xlcStWpAuZEmO2f4Ej5kYgSp3woGdq3tWFrTH30S3mD2PyjlQ=w48-h48-c-k-nd",
    "person-yellow-podium-blue": "https://yt3.ggpht.com/N28nFDm82F8kLPAa-jY_OySFsn3Ezs_2Bl5kdxC8Yxau5abkj_XZHYsS3uYKojs8qy8N-9w=w48-h48-c-k-nd",
    "baseball-white-cap-out": "https://yt3.ggpht.com/8DaGaXfaBN0c-ZsZ-1WqPJ6H9TsJOlUUQQEoXvmdROphZE9vdRtN0867Gb2YZcm2x38E9Q=w48-h48-c-k-nd",
    "whistle-red-blow": "https://yt3.ggpht.com/DBu1ZfPJTnX9S1RyKKdBY-X_CEmj7eF6Uzl71j5jVBz5y4k9JcKnoiFtImAbeu4u8M2X8tU=w48-h48-c-k-nd",
    "person-turquoise-crowd-surf": "https://yt3.ggpht.com/Q0wFvHZ5h54xGSTo-JeGst6InRU3yR6NdBRoyowaqGY66LPzdcrV2t-wBN21kBIdb2TeNA=w48-h48-c-k-nd",
    "finger-red-number-one": "https://yt3.ggpht.com/Hbk0wxBzPTBCDvD_y4qdcHL5_uu7SeOnaT2B7gl9GLB4u8Ecm9OaXCGSMMUBFeNGl5Q3fHJ2=w48-h48-c-k-nd",
    "text-yellow-goal": "https://yt3.ggpht.com/tnHp8rHjXecGbGrWNcs7xss_aVReaYE6H-QWRCXYg_aaYszHXnbP_pVADnibUiimspLvgX0L=w48-h48-c-k-nd",
    "medal-yellow-first-red": "https://yt3.ggpht.com/EEHiiIalCBKuWDPtNOjjvmEZ-KRkf5dlgmhe5rbLn8aZQl-pNz_paq5UjxNhCrI019TWOQ=w48-h48-c-k-nd",
    "person-blue-wheelchair-race": "https://yt3.ggpht.com/ZepxPGk5TwzrKAP9LUkzmKmEkbaF5OttNyybwok6mJENw3p0lxDXkD1X2_rAwGcUM0L-D04=w48-h48-c-k-nd",
    "card-red-penalty": "https://yt3.ggpht.com/uRDUMIeAHnNsaIaShtRkQ6hO0vycbNH_BQT7i3PWetFJb09q88RTjxwzToBy9Cez20D7hA=w48-h48-c-k-nd",
    "stopwatch-blue-hand-timer": "https://yt3.ggpht.com/DCvefDAiskRfACgolTlvV1kMfiZVcG50UrmpnRrg3k0udFWG2Uo9zFMaJrJMSJYwcx6fMgk=w48-h48-c-k-nd",
    "yt": "https://yt3.ggpht.com/IkpeJf1g9Lq0WNjvSa4XFq4LVNZ9IP5FKW8yywXb12djo1OGdJtziejNASITyq4L0itkMNw=w48-h48-c-k-nd",
    "oops": "https://yt3.ggpht.com/PFoVIqIiFRS3aFf5-bt_tTC0WrDm_ylhF4BKKwgqAASNb7hVgx_adFP-XVhFiJLXdRK0EQ=w48-h48-c-k-nd",
    "buffering": "https://yt3.ggpht.com/5gfMEfdqO9CiLwhN9Mq7VI6--T2QFp8AXNNy5Fo7btfY6fRKkThWq35SCZ6SPMVCjg-sUA=w48-h48-c-k-nd",
    "stayhome": "https://yt3.ggpht.com/_1FGHypiub51kuTiNBX1a0H3NyFih3TnHX7bHU06j_ajTzT0OQfMLl9RI1SiQoxtgA2Grg=w48-h48-c-k-nd",
    "dothefive": "https://yt3.ggpht.com/-nM0DOd49969h3GNcl705Ti1fIf1ZG_E3JxcOUVV-qPfCW6jY8xZ98caNLHkVSGRTSEb7Y9y=w48-h48-c-k-nd",
    "elbowbump": "https://yt3.ggpht.com/2ou58X5XuhTrxjtIM2wew1f-HKRhN_T5SILQgHE-WD9dySzzJdGwL4R1gpKiJXcbtq6sjQ=w48-h48-c-k-nd",
    "goodvibes": "https://yt3.ggpht.com/2CvFOwgKpL29mW_C51XvaWa7Eixtv-3tD1XvZa1_WemaDDL2AqevKbTZ1rdV0OWcnOZRag=w48-h48-c-k-nd",
    "thanksdoc": "https://yt3.ggpht.com/bUnO_VwXW2hDf-Da8D64KKv6nBJDYUBuo13RrOg141g2da8pi9-KClJYlUDuqIwyPBfvOO8=w48-h48-c-k-nd",
    "videocall": "https://yt3.ggpht.com/k5v_oxUzRWmTOXP0V6WJver6xdS1lyHMPcMTfxn23Md6rmixoR5RZUusFbZi1uZwjF__pv4=w48-h48-c-k-nd",
    "virtualhug": "https://yt3.ggpht.com/U1TjOZlqtS58NGqQhE8VWDptPSrmJNkrbVRp_8jI4f84QqIGflq2Ibu7YmuOg5MmVYnpevc=w48-h48-c-k-nd",
    "yougotthis": "https://yt3.ggpht.com/s3uOe4lUx3iPIt1h901SlMp_sKCTp3oOVj1JV8izBw_vDVLxFqk5dq-3NX-nK_gnUwVEXld3=w48-h48-c-k-nd",
    "sanitizer": "https://yt3.ggpht.com/EJ_8vc4Gl-WxCWBurHwwWROAHrPzxgePodoNfkRY1U_I8L1O2zlqf7-wfUtTeyzq2qHNnocZ=w48-h48-c-k-nd",
    "takeout": "https://yt3.ggpht.com/FizHI5IYMoNql9XeP7TV3E0ffOaNKTUSXbjtJe90e1OUODJfZbWU37VqBbTh-vpyFHlFIS0=w48-h48-c-k-nd",
    "hydrate": "https://yt3.ggpht.com/tpgZgmhX8snKniye36mnrDVfTnlc44EK92EPeZ0m9M2EPizn1vKEGJzNYdp7KQy6iNZlYDc1=w48-h48-c-k-nd",
    "chillwcat": "https://yt3.ggpht.com/y03dFcPc1B7CO20zgQYzhcRPka5Bhs6iSg57MaxJdhaLidFvvXBLf_i4_SHG7zJ_2VpBMNs=w48-h48-c-k-nd",
    "chillwdog": "https://yt3.ggpht.com/Ir9mDxzUi0mbqyYdJ3N9Lq7bN5Xdt0Q7fEYFngN3GYAcJT_tccH1as1PKmInnpt2cbWOam4=w48-h48-c-k-nd",
    "elbowcough": "https://yt3.ggpht.com/DTR9bZd1HOqpRJyz9TKiLb0cqe5Hb84Yi_79A6LWlN1tY-5kXqLDXRmtYVKE9rcqzEghmw=w48-h48-c-k-nd",
    "learning": "https://yt3.ggpht.com/ZuBuz8GAQ6IEcQc7CoJL8IEBTYbXEvzhBeqy1AiytmhuAT0VHjpXEjd-A5GfR4zDin1L53Q=w48-h48-c-k-nd",
    "washhands": "https://yt3.ggpht.com/qXUeUW0KpKBc9Z3AqUqr_0B7HbW1unAv4qmt7-LJGUK_gsFBIaHISWJNt4n3yvmAnQNZHE-u=w48-h48-c-k-nd",
    "socialdist": "https://yt3.ggpht.com/igBNi55-TACUi1xQkqMAor-IEXmt8He56K7pDTG5XoTsbM-rVswNzUfC5iwnfrpunWihrg=w48-h48-c-k-nd",
    "shelterin": "https://yt3.ggpht.com/gjC5x98J4BoVSEPfFJaoLtc4tSBGSEdIlfL2FV4iJG9uGNykDP9oJC_QxAuBTJy6dakPxVeC=w48-h48-c-k-nd"

}