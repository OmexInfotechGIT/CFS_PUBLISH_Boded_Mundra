USE [PREBONDED]
GO

ALTER VIEW [dbo].[ContainerCount] AS 

SELECT trnDocumentID,SUM(CASE WHEN ContainerNumber <> '' THEN 1 ELSE 0 END) AS TotalContainer    
 ,SUM(CASE WHEN ReceiveContainer <> '' THEN 1 ELSE 0 END) AS TotalReceiveContainer    
 ,(SUM(CASE WHEN ContainerNumber <> '' THEN 1 ELSE 0 END) - SUM(CASE WHEN ReceiveContainer <> '' THEN 1 ELSE 0 END)) AS TotalPendingContainer  
FROM (
SELECT	D.trnDocumentID
		,DC.ContainerNumber
		,(SELECT CGD.ContNo FROM trnContainerGateInDetails CGD
					INNER JOIN trnContainerGateIn CG ON CG.trnContainerGateInid=CGD.trnContainerGateInid AND CG.Flagdeleted=0 AND CG.IsFinished=1
					WHERE CGD.trnDocumentContainerID =DC.trnDocumentContainerID AND CGD.Flagdeleted=0) AS ReceiveContainer     
FROM trnDocumentContainer DC    
INNER JOIN trnDocument D ON D.trnDocumentID = DC.trnDocumentID AND D.Flagdeleted = 0
WHERE DC.Flagdeleted = 0     
) AS A
Group By trnDocumentID    
    