import {forward} from "effector";
import {addressRequest, phoneRequest, emailRequest, workTimeRequest, logoRequest} from "./event";
import {
    $address,
    $addressIsLoading,
    $phone,
    $phoneIsLoading,
    $email,
    $emailIsLoading,
    $workTime,
    $workTimeIsLoading, $logo, $logoIsLoading
} from "./store";
import {fetchAddressFx, fetchEmailFx, fetchLogoFx, fetchPhoneFx, fetchWorkTimeFx} from "./fx";

$address
    .on(fetchAddressFx.doneData, (_, result) => result.data);

$addressIsLoading
    .on(fetchAddressFx.pending, (_, isPending) => isPending);

$phone
    .on(fetchPhoneFx.doneData, (_, result) => result.data);

$phoneIsLoading
    .on(fetchPhoneFx.pending, (_, isPending) => isPending);

$email.on(fetchEmailFx.doneData, (_, result) => result.data);
$emailIsLoading
    .on(fetchEmailFx.pending, (_, isPending) => isPending);

$workTime.on(fetchWorkTimeFx.doneData, (_, result) => result.data);
$workTimeIsLoading
    .on(fetchWorkTimeFx.pending, (_, isPending) => isPending);

$logo.on(fetchLogoFx.doneData, (_, result) => result.data);
$logoIsLoading.on(fetchLogoFx.pending, (isLoading) => isLoading);

forward({
    from: addressRequest,
    to: fetchAddressFx
});

forward({
    from: phoneRequest,
    to: fetchPhoneFx
});

forward({
    from: emailRequest,
    to: fetchEmailFx
});

forward({
    from: workTimeRequest,
    to: fetchWorkTimeFx
});

forward({
    from: logoRequest,
    to: fetchLogoFx
});