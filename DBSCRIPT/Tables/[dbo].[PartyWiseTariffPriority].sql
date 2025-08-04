USE [PREBONDED]
GO

CREATE TABLE [dbo].[PartyWiseTariffPriority](
		PartyWiseTariffPriorityID BIGINT IDENTITY(1,1)NOT NULL PRIMARY KEY,
		SequenceNo BIGINT NOT NULL,
		BillToPartyID INT  NULL,
		BillToParty NVARCHAR(MAX) NULL,
		LineID INT NULL,
		Line NVARCHAR(MAX) NULL,
		CHAID INT NULL,
		CHA NVARCHAR(MAX) NULL,
		ImporterID INT NULL,
		Importer NVARCHAR(MAX) NULL,
		AgentID INT NULL,
		Agent NVARCHAR(MAX) NULL,
		ExporterID INT NULL,
		Exporter NVARCHAR(MAX) NULL,
		ConsolerID INT NULL,
		Consoler NVARCHAR(MAX) NULL,
		ForwarderID INT NULL,
		Forwarder NVARCHAR(MAX) NULL,
		Flagdeleted BIT DEFAULT(0) NULL,
		CreatedBy INT NOT NULL,
		CreatedDate DATETIME  DEFAULT ([dbo].[GetCurrentDateTime]()) NOT NULL,
		UpdatedBy BIT NULL,
		UpdatedDate DATETIME NULL,
		YearID INT NULL,
)