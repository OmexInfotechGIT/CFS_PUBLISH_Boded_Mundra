------------SpaceCertificate------
DELETE spb FROM trnSpaceCertificateBookingGW spb 
INNER JOIN trnSpaceCertificateGW sp on sp.trnSpaceCertificateGWID=spb.SpaceCertificateGWID and sp.IsFinished=0
WHERE sp.IsFinished=0  and sp.CreatedDate < GETDATE()-1
-------------------
DELETE FROM trnSpaceCertificateGW where IsFinished=0 and 
CreatedDate < GETDATE()-1




----------------------Cargo WorkOrder -------
DELETE WOLD FROM trnWorkOrderGWlotdetails WOLD 
INNER JOIN trnWorkOrderGW WO ON WO.trnWorkOrderGWid =WOLD.trnWorkOrderGWID AND WO.IsFinished=0
WHERE WO.CreatedDate < GETDATE()-1
--------------------------------
DELETE FROM trnWorkOrderGW where IsFinished=0 AND
CreatedDate < GETDATE()-1


-----------------------Credit Note -------------
DELETE CNI FROM CreditNoteItems CNI
INNER JOIN CreditNote CN ON CN.CreditNoteID=CNI.CreditNoteID AND 
CN.Flagdeleted=0 AND CN.IsFinished=0 AND CN.IsApproved=0
WHERE CNI.Flagdeleted=0 AND CN.CreatedDate < GETDATE()-1
-----------------------------
DELETE FROM CreditNote where IsFinished=0 AND
CreatedDate < GETDATE()-1


